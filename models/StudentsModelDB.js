const mongoose = require('mongoose');


//Create Schema
const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        pattern: /^[A-Z][a-z]*$/,
        required: true,
        minlength: 3,
        maxLength: 15,
        trim: true
    },
    dept: {
        type: String,
        required: true,
        default: "SD"

    },
    id: {
        type: Number,
        required: true
    }
});


//Create Model
const Student = mongoose.model("dataOfStudents", studentsSchema)

module.exports = Student;