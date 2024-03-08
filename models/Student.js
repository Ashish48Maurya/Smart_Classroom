const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    department:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    user:{
        type: String,
        default: "Student",
    },
    email:{
        type: String,
        required: true,
    },
    sapID:{
        type: Number,
        required: true,
    },
    phoneNo:{
        type: Number,
        required: true,
    }
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
