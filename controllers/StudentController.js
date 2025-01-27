const Student = require('../models/Student');


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
            const error = new Error("Student With given ID is not found");
            error.statusCode = 404;
            return next(error);
        } 

        res.json(std);

    } catch(err){
        next(err);
    }
};


//Create Student
let createStudent = async (req, res, next) => {
    try{
        let std = new Student({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            department: req.body.department
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
            {new: true}
        );
        if(!std){
            const error = new Error("Student With given ID is not found");
            error.statusCode = 404;
            return next(error);
        }

        res.json(std);

    } catch(err){
        next(err);
    }
};


//Delete exist Student
let deletedStudent = async (req, res, next) => {
    try{
        let std = await Student.findByIdAndDelete(req.params.id);
        if(!std){
            const error = new Error("Student With given ID is not found");
            error.statusCode = 404;
            return next(error);
        } 

        res.json(std);

    } catch(err){
        next(err);
    }
};

module.exports = {
    createStudent,
    getStudentById,
    getAllStudents,
    updateStudent,
    deletedStudent
}