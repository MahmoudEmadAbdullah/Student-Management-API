const mongoose = require('mongoose');


//Create Schema
const studentSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    department: { 
        type: String, 
        required: true, 
        enum: ["CS", "IT", "Math", "Physics"] }
});


//Create Model
const Student = mongoose.model("students", studentSchema)

module.exports = Student;