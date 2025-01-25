const Student = require('../models/StudentsModelDB');


//get all students
let getAllStudents = async (req, res, next) => {
    try{
        let std = await Student.find();
        res.send(std);
    } catch(err){
        next(err);
    }
};


//get Student by Id
let getStudentById = async (req, res, next) => {
    try{
        let std = await Student.findById(req.params.id);
        if(!std){
            return res.status(404).send("Student With given ID is not found");
        } else {
            res.json(std);
        }
    } catch(err){
        next(err);
    }
};


//Create Student
let addNewStudent = async (req, res, next) => {
    try{
        let std = new Student({
            name: req.body.name,
            dept: req.body.dept,
            id: req.body.id
        });
        await std.save();
        res.status(201).json(std);
    } catch(err){
        next(err);
    }
};


//Update Student
let updateStudent = async (req, res, next) => {
    try {
        let std = await Student.findOneAndUpdate(
            {_id: req.params.id}, 
            req.body, 
            {returnDocument: "after"}
        );
        if(!std){
            return res.status(400).json({error: "Student With given ID is not found"});
        } else {
            res.json(std);
        }
    } catch(err){
        next(err);
    }
};


//Delete exist Student
let deletedStudent = async (req, res, next) => {
    try{
        let std = await Student.findByIdAndDelete(req.params.id);
        if(!std){
            return res.status(404).json({error:"Student With given ID is not found"});
        } else {
            res.json(std);
        }
    } catch(err){
        next(err);
    }
};

module.exports = {
    addNewStudent,
    getStudentById,
    getAllStudents,
    updateStudent,
    deletedStudent
}