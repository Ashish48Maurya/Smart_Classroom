const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const attendanceRecordSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    count: {
        type: Number,
        default: 0,
    },
});

const subjectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    attendance: [attendanceRecordSchema],
});

const studentSchema = new Schema({
    tokens: {
        type: String,
    },
    fullname: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        default: "Student",
    },
    email: {
        type: String,
        required: true,
    },
    sapID: {
        type: Number,
        required: true,
    },
    phoneNo: {
        type: Number,
        required: true,
    },
    file: {
        type: String
    },
    AdmissionDate: {
        type: Date,
        default: Date.now,
    },
    yearOfStudy: {
        type: String,
        default: "1st",
    },
    subjects: [subjectSchema],
    assignments:[{
        type: Schema.Types.ObjectId,
        ref: 'assignment', 
    }],
    assignmentFiles: [{
        type: String,
    }]
});


studentSchema.methods.generateToken = async function () {
    try {
        return jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "30d",
            }
        );
    } catch (error) {
        console.error("Token Error: ", error);
    }
};

const Student = mongoose.model("student", studentSchema);
module.exports = Student;