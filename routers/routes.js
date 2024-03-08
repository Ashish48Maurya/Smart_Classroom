const express = require('express');
const router = express.Router();
const Student = require('../models/Student')
const Teacher = require('../models/Teacher')
const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin')
const authmiddleware = require('../middleware/authmiddleware')
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

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

router.post('/registerStudent',authmiddleware(Admin), async (req, res) => {
    const { fullname, department, password, email, phoneNo, sapID } = req.body;
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
            password: hashedPassword
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


router.post('/registerFaculty',authmiddleware(Admin), async (req, res) => {
    const { fullname, department, subject, password, email, phoneNo, teacherID } = req.body;

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
            password: hashedPassword
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
                subject: `This Link Will Expire in 10 Minutes: <a href="http://localhost:8000/api/test/resetPassword/${USER}/${token}/${id}">Password Reset Link</a>`
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
            console.error(err);
            return res.status(500).json({ error: "Internal server error" });
        }   
    }
    else {
        return res.status(404).json({ message: "Unauthorized User" });
    }
})


router.get('/Student', authmiddleware(Student), (req, res) => {
    try {
        const userData = req.User;
        console.log(userData);
        res.status(200).json({ msg: userData })
    } catch (error) {
        console.log(error)
    }
})


router.get('/Admin', authmiddleware(Admin), (req, res) => {
    try {
        const userData = req.User;
        console.log(userData);
        res.status(200).json({ msg: userData })
    } catch (error) {
        console.log(error)
    }
})


router.get('/Teacher', authmiddleware(Teacher), (req, res) => {
    try {
        const userData = req.User;
        console.log(userData);
        res.status(200).json({ msg: userData })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;