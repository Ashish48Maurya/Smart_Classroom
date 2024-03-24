const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Student = require('../models/Student')
const Teacher = require('../models/Teacher')
const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin')
const Classroom = require('../models/Classroom')
const authmiddleware = require('../middleware/authmiddleware')
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');
const serviceAccount = require('./firebase.json')
const Assignment = require('../models/Assignment');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

//multer
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + file.originalname)
    }
})


const transporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    secureConnection: false,
    auth: {
        user: process.env.GMAIL,
        pass: process.env.GPASSWORD,
    }
});

const sendMail = async (options) => {
    console.log("options:", options)
    try {
        const info = await transporter.sendMail({
            from: process.env.GMAIL,
            to: options.to,
            subject: options.title,//Title
            text: "Hello world?",
            html: `<b>${options.subject}</b>`,//Subject
        });
        console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

router.post('/registerStudent', authmiddleware(Admin), async (req, res) => {
    const { fullname, department, password, email, phoneNo, sapID, subjects, student_photo } = req.body;
    if (!email || !fullname || !password) {
        console.log('Please add all the fields');
        return res.status(422).json({ error: "Please add all the fields" });
    }

    try {
        const existingUser = await Student.findOne({ $or: [{ email: email }, { sapID: sapID }] });

        if (existingUser) {
            console.log('User already exists! with that username or email');
            return res.status(422).json({ error: "User already exists! with that username or email" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new Student({
            fullname,
            department,
            email,
            phoneNo,
            sapID,
            password: hashedPassword,
            subjects: subjects.map(subject => ({ name: subject })),
            student_photo
        });

        user.save().then(async user => {
            await sendMail({
                to: email,
                title: "Registration Successful!",
                subject: `Your Login ID is ${email} & Password is ${password}`
            });
            return res.json({
                message: "Registered Successfully",
                // token: await user.generateToken(),
                userId: user._id.toString(),
            });
        })
            .catch(err => {
                console.log(err);
                return res.status(500).json({ error: "Internal server error" });
            });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
    }
})


router.post('/registerFaculty', authmiddleware(Admin), async (req, res) => {
    const { fullname, department, subject, password, email, phoneNo, teacherID, teacher_photo } = req.body;

    if (!email || !fullname || !password) {
        console.log('Please add all the fields');
        return res.status(422).json({ error: "Please add all the fields" });
    }

    try {
        const existingUser = await Teacher.findOne({ $or: [{ email: email }, { teacherID: teacherID }] });

        if (existingUser) {
            console.log('User already exists! with that username or email');
            return res.status(422).json({ error: "User already exists! with that username or email" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new Teacher({
            fullname,
            department,
            subject,
            email,
            phoneNo,
            teacherID,
            password: hashedPassword,
            teacher_photo
        });

        user.save().then(async user => {
            return res.json({
                message: "Registered Successfully",
                // token: await user.generateToken(),
                userId: user._id.toString(),
            });
        })
            .catch(err => {
                console.log(err);
                return res.status(500).json({ error: "Internal server error" });
            });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
    }
})


router.post('/login/:USER', async (req, res) => {
    const { email, password } = req.body;
    const { USER } = req.params;
    const deviceToken = req.query.deviceToken;

    if (!email || !password) {
        return res.status(422).json({ error: "Please provide a valid email and password" });
    }

    try {
        let user;

        switch (USER.toLowerCase()) {
            case 'teacher':
                user = await Teacher.findOne({ email });
                break;
            case 'student':
                user = await Student.findOne({ email });
                if (!user) {
                    return res.status(422).json({ error: "Invalid username or password" });
                }
                user.tokens = deviceToken;
                await user.save();
                break;
            case 'admin':
                user = await Admin.findOne({ email });
                break;
            default:
                return res.status(400).json({ error: "Invalid USER parameter" });
        }

        if (!user) {
            return res.status(422).json({ error: "Invalid username or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const secretKey = process.env.JWT_SECRET_KEY || 'yourDefaultSecretKey';
            const token = jwt.sign({ _id: user.id }, secretKey);

            return res.status(200).json({
                user: user,
                message: "Login successful",
                token,
            });
        } else {
            return res.status(404).json({ error: "Invalid Credentials!!!" });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
    }
})


router.get('/forgetPass/:email/:USER', async (req, res) => {
    const { USER, email } = req.params;
    console.log(USER);
    if (!email) {
        return res.status(422).json({ error: "Please provide a valid email" });
    }
    try {

        let user;
        switch (USER.toLowerCase()) {
            case 'teacher':
                user = await Teacher.findOne({ email });
                break;
            case 'student':
                user = await Student.findOne({ email });
                break;
            case 'admin':
                user = await Admin.findOne({ email });
                break;
            default:
                return res.status(400).json({ error: "Invalid USER parameter" });
        }
        if (!user) {
            return res.status(422).json({ error: "User Not Found" });
        }
        const token = jwt.sign(
            {
                userId: user._id.toString(),
                email: user.email,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "10m",
            }
        );
        const id = user._id;
        try {
            await sendMail({
                to: user.email,
                title: "Password Reset Link",
                subject: `This Link Will Expire in 10 Minutes: <a href="http://localhost:3000/resetPassword/${USER}/${token}/${id}">Password Reset Link</a>`
            });
            res.status(200).json({ message: "Password Reset Link Is Sent On Your Email", link: token + id });
        }
        catch (err) {
            return res.status(500).json({ error: "Internal server error" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
})


router.put('/resetPassword/:USER/:token/:id', async (req, res) => {
    const { id, token, USER } = req.params;
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const verifyUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
    let makeUpdate;
    if (verifyUser) {
        try {
            switch (USER.toLowerCase()) {
                case 'teacher':
                    makeUpdate = await Teacher.findByIdAndUpdate(id, { password: hashedPassword }, { useFindAndModify: false, new: true });
                    break;
                case 'student':
                    makeUpdate = await Student.findByIdAndUpdate(id, { password: hashedPassword }, { useFindAndModify: false, new: true });
                    break;
                case 'admin':
                    makeUpdate = await Admin.findByIdAndUpdate(id, { password: hashedPassword }, { useFindAndModify: false, new: true });
                    break;
                default:
                    return res.status(400).json({ error: "Invalid USER parameter" });
            }

            if (!makeUpdate) {
                return res.status(404).send("User Not Found");
            } else {
                return res.status(200).json({ message: "Password Changed Successfully!!!", user: makeUpdate });
            }
        } catch (err) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }
    else {
        return res.status(404).json({ message: "Unauthorized User" });
    }
})



router.patch('/update_info/:id/:USER', async (req, res) => {
    const { id, USER } = req.params;
    const updateFields = req.body;
    try {
        if ('password' in updateFields) {
            const hashedPassword = await bcrypt.hash(updateFields.password, 10);
            updateFields.password = hashedPassword;
        }

        switch (USER.toLowerCase()) {
            case 'teacher':
                updatedUser = await Teacher.findOneAndUpdate(
                    { _id: id },
                    { $set: updateFields },
                    { useFindAndModify: false, new: true }
                );
                break;
            case 'student':
                updatedUser = await Student.findOneAndUpdate(
                    { _id: id },
                    { $set: updateFields },
                    { useFindAndModify: false, new: true }
                );
                break;
            case 'admin':
                updatedUser = await Admin.findOneAndUpdate(
                    { _id: id },
                    { $set: updateFields },
                    { useFindAndModify: false, new: true }
                );
                break;
            default:
                return res.status(400).json({ error: "Invalid USER parameter" });
        }

        if (!updatedUser) {
            return res.status(404).json({ error: "Failed To Update, User Not Found" });
        }

        return res.status(200).json({ "Updated_User_info": updatedUser });
    } catch (err) {
        return res.status(500).json({ "error": `Internal Server Error -> ${err}` });
    }
});


router.post('/markAttendance/:studentId', authmiddleware(Teacher), async (req, res) => {
    const { studentId } = req.params;
    const { subjectName } = req.body;

    try {
        const student = await Student.findById(studentId);

        if (!student) {
            return res.status(404).json({ "error": "Student not found" });
        }

        const subject = student.subjects.find(subj => subj.name === subjectName);

        if (!subject) {
            return res.status(404).json({ "error": `Subject "${subjectName}" not found for the student` });
        }

        const today = new Date().toISOString().split('T')[0];

        const existingAttendanceRecord = subject.attendance.find(record => record.date.toISOString().split('T')[0] === today);

        if (existingAttendanceRecord) {
            return res.status(400).json({ "error": "Attendance already marked for today" });
        }

        subject.attendance.push({
            date: new Date(),
            count: subject.attendance.length + 1,
        });

        await student.save();

        return res.status(200).json({ "message": "Attendance marked successfully" });
    } catch (err) {
        return res.status(500).json({ "error": `Internal Server Error -> ${err}` });
    }
});


//Admin Updating Users Info (e.g) year if study
router.patch('/update_user_info/:id/:USER', authmiddleware(Admin), async (req, res) => {
    const { id, USER } = req.params;
    const updateFields = req.body;
    try {
        switch (USER.toLowerCase()) {
            case 'teacher':
                updatedUser = await Teacher.findOneAndUpdate(
                    { _id: id },
                    { $set: updateFields },
                    { useFindAndModify: false, new: true }
                );
                break;
            case 'student':
                updatedUser = await Student.findOneAndUpdate(
                    { _id: id },
                    { $set: updateFields },
                    { useFindAndModify: false, new: true }
                );
                break;
            default:
                return res.status(400).json({ error: "Invalid USER parameter" });
        }

        if (!updatedUser) {
            return res.status(404).json({ error: "Failed To Update, User Not Found" });
        }
        return res.status(200).json({ message: "User Updated Successfully!", Updated_User_info: updatedUser });
    } catch (err) {
        return res.status(500).json({ "error": `Internal Server Error -> ${err}` });
    }
});


router.get('/Student/:studentId', authmiddleware(Admin || Student), async (req, res) => {//done
    try {
        const { studentId } = req.params;
        const student = await Student.findById(studentId);
        const userData = req.User;
        console.log(userData);
        console.log(student);
        res.status(200).json({ student })
    } catch (error) {
        console.log(error)
    }
})


router.get('/Admin', authmiddleware(Admin), (req, res) => {//done
    try {
        const userData = req.User;
        console.log(userData);
        res.status(200).json({ msg: userData })
    } catch (error) {
        console.log(error)
    }
})


router.get('/Teacher/:teacherId', authmiddleware([Admin, Teacher]), async (req, res) => {//done
    try {
        const { teacherId } = req.params;
        const teacher = await Teacher.findById(teacherId);
        const userData = req.User;
        console.log(userData);
        console.log(teacher);
        res.status(200).json({ teacher })
    } catch (error) {
        console.log(error)
    }
})

router.get('/get_students', async (req, res) => {
    try {//done
        const data = await Student.find({});
        res.status(200).json({ msg: data })
    } catch (error) {
        console.log(error)
    }
})

router.get('/get_teachers', async (req, res) => {//done
    try {
        const data = await Teacher.find({});
        res.status(200).json({ msg: data })
    } catch (error) {
        console.log(error)
    }
})


//fetch All Class
router.get('/get_classrooms', authmiddleware(Admin || Teacher), async (req, res) => {
    try {
        const data = await Classroom.find({});
        res.status(200).json({ msg: data })
    } catch (error) {
        console.log(error)
    }
})

//fetch data of a particular class to show on a page
router.get('/class/:id', authmiddleware(Admin), async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Classroom.findById(id);
        res.status(200).json({ msg: data })
    } catch (error) {
        console.log(error)
    }
})

//Update particular class
router.patch('/update_class/:id', authmiddleware(Admin), async (req, res) => {
    const { id } = req.params;
    const updateFields = req.body;
    try {
        const updatedClassroom = await Classroom.findOneAndUpdate(
            { _id: id },
            { $set: updateFields },
            { useFindAndModify: false, new: true }
        );

        if (!updatedClassroom) {
            return res.status(404).json({ error: "Classroom not found" });
        }

        return res.status(200).json({ Updated_Classroom: updatedClassroom });
    } catch (err) {
        return res.status(500).json({ error: `Internal Server Error -> ${err}` });
    }
})

//Search Class by Strength
router.get('/find_class/:strength', authmiddleware(Teacher), async (req, res) => {
    try {
        const { strength } = req.params;

        if (isNaN(strength)) {
            return res.status(400).json({ error: "Strength parameter must be a valid number" });
        }

        const classrooms = await Classroom.find({
            isReserved: false,
            strength: { $gte: strength }
        }).select('classroom_no strength facility isReserved');

        if (classrooms.length === 0) {
            console.log("No classes found with isReserved set to false");
            return res.status(404).json({ error: "No classes found" });
        }

        console.log("Classes with isReserved set to false:", classrooms);
        res.status(200).json({ classrooms });
    } catch (e) {
        console.error("Error:", e);
        res.status(500).json({ error: "Internal server error" });
    }
})


//Allocate Class for required amount of time
router.patch('/reserve_class/:id', authmiddleware(Teacher), async (req, res) => {
    const { id } = req.params;
    const { time_in_hour, facultyName } = req.body;
    // const reservedTime = 60 //1 min in seconds
    const reservedTime = time_in_hour * 60 * 60; //in seconds

    try {
        const updatedClassroom = await Classroom.findByIdAndUpdate(
            id,
            { $set: { isReserved: true, faculty_name: facultyName, reservedUntil: Date.now() + reservedTime * 1000 } }, // Convert seconds to milliseconds
            { useFindAndModify: false, new: true }
        );

        if (!updatedClassroom) {
            return res.status(404).json({ error: "Classroom not found" });
        }

        setTimeout(async () => {
            try {
                const classToUnreserve = await Classroom.findByIdAndUpdate(
                    id,
                    { $set: { isReserved: false, faculty_name: null, reservedUntil: null } },
                    { useFindAndModify: false, new: true }
                );

                if (!classToUnreserve) {
                    console.log("Failed to unreserve class after reserved time.");
                } else {
                    console.log("Class unreserved after reserved time:", classToUnreserve);
                }
            } catch (err) {
                console.error("Error unreserving class after reserved time:", err);
            }
        }, reservedTime * 1000);

        return res.status(200).json({ Updated_Classroom: updatedClassroom });
    } catch (err) {
        return res.status(500).json({ error: `Internal Server Error -> ${err}` });
    }
});


router.get('/faculty/students/:department/:yearOfStudy', authmiddleware(['Teacher', 'Admin']), async (req, res) => {
    const { department, yearOfStudy } = req.params;

    try {
        const students = await Student.find({
            department: department,
            yearOfStudy: yearOfStudy
        });

        if (!students || students.length === 0) {
            return res.status(404).json({ "error": "No students found for the specified department and year" });
        }

        const studentList = students.map(student => ({
            _id: student._id,
            fullname: student.fullname,
            sapID: student.sapID,
        }));

        return res.status(200).json({ "studentList": studentList });
    } catch (err) {
        return res.status(500).json({ "error": `Internal Server Error -> ${err}` });
    }
});


router.post('/give_assignment', authmiddleware(Teacher), upload.single('file'), async (req, res) => {
    const { title, description, dueDate, subject, yearOfStudy, department, file } = req.body;
    const teacherId = req.userID;

    try {
        const teacher = await Teacher.findById(teacherId);

        if (!teacher) {
            return res.status(404).json({ error: 'Teacher not found' });
        }
        const { originalname, path } = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path + '.' + ext;
        fs.renameSync(path, newPath);

        const assignment = new Assignment({
            title,
            description,
            dueDate,
            subject,
            yearOfStudy,
            department,
            file: newPath
        });

        await assignment.save()
        teacher.assignments.push(assignment._id);
        await teacher.save();

        const students = await Student.find({ yearOfStudy, department });

        if (students.length === 0) {
            return res.status(404).json({ error: 'No students found for the specified yearOfStudy and department' });
        }

        for (const student of students) {
            student.assignments.push(assignment._id);
            await student.save();
        }

        return res.status(200).json({ message: 'Assignment Saved and Sent Successfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/get-files', async (req, res) => {
    try {

    }
    catch (error) {
        console.error(error);
        return res.json({ msg: `An error occurred : ${error}` })
    }
})



//Working Code
router.get('/sendNotification', async (req, res) => {
    try {
        // const { department, yearOfStudy, data } = req.body;
        // const students = await Student.find({ department, yearOfStudy }, 'tokens');

        // const registrationTokens = students.flatMap(student => student.tokens);

        // if (!registrationTokens || registrationTokens.length === 0) {
        //     return res.status(400).send('No registration tokens found for the students');
        // }

        // const message = {
        //     data: {
        //         title: data.title,
        //         body: data.body,
        //     },
        //     tokens: registrationTokens,
        // };
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });


        const deviceToken = 'fewnVqTezpg5lz-n1ImvYG:APA91bFLYknDYgl_D3uvGG-x3kLdLEYOKso2U3vXNTX-sUlSXux7a4NlQv4V3s-yodVq01i99ZIK0pwLTAChBXiYXUSXYjXcWbjESrrRYXnBQXzqMr7FHpieTDdOuBNm1F4xF-4eyYLO';


        const payload = {
            notification: {
                title: 'Test Notification',
                body: 'This is a test notification from your backend server.'
            }
        };


        admin.messaging().sendToDevice(deviceToken, payload)
            .then((response) => {
                console.log('Successfully sent test notification:', response);
            })
            .catch((error) => {
                console.error('Error sending test notification:', error);
            });

    } catch (error) {
        console.error('Error sending message1:', error);
        res.status(500).send('Error sending message');
    }
});


// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
// });

// router.post('/sendNotification', async (req, res) => {
//     try {
//         const { department, yearOfStudy, data } = req.body;
//         const students = await Student.find({ department, yearOfStudy }, 'tokens');

//         const registrationTokens = students.flatMap(student => student.tokens);

//         if (!registrationTokens || registrationTokens.length === 0) {
//             return res.status(400).send('No registration tokens found for the students');
//         }

//         const message = {
//             data: {
//                 title: data.title,
//                 body: data.body,
//             },
//             tokens: registrationTokens,
//         };

//         const messagingResponse = await admin.messaging(message);

//         console.log('Successfully sent notification:', messagingResponse);
//         res.status(200).json({ success: true, response: messagingResponse });

//     } catch (error) {
//         console.error('Error sending message:', error);
//         res.status(500).json({ success: false, error: 'Error sending message' });
//     }
// });




//Pending
router.post('/submit_assignment', authmiddleware(Student), async (req, res) => {
    // const { assignmentId } = req.body;
    // const studentId = req.userID;

    // try {
    //     const assignment = await Assignment.findById(assignmentId);

    //     if (!assignment) {
    //         return res.status(404).json({ error: 'Assignment not found' });
    //     }
    //     const student = await Student.findById(studentId);
    //     student.assignmentFiles.push(assignmentFilePath);
    //     await student.save();

    //     return res.status(200).json({ message: 'Assignment submitted successfully' });
    // } catch (err) {
    //     console.error(err);
    //     return res.status(500).json({ error: 'Internal server error' });
    // }
});

module.exports = router;