const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    yearOfStudy: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true
    },
    file: {
        type: String
    },
    students_output: [{
        fullname: String,
        sapID: Number,
        assignmentPath: String
    }]
});

const Assignment = mongoose.model("assignment", assignmentSchema);
module.exports = Assignment;