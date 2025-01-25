const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/StudentsController');
const {validateCreateStudent, validateStudentId} = require('../middlewares/StudentValidatorMW');
const verfiyToken = require('../middlewares/AuthMWPermission');


//Request all students
router.get('/', studentsController.getAllStudents);


//Request Students by id (URL Parameter)
router.get('/:id', validateStudentId, studentsController.getStudentById);


//Create new student
router.post('/', verfiyToken, validateCreateStudent, studentsController.addNewStudent);


//Delete existing student
router.delete('/:id', verfiyToken, validateStudentId, studentsController.deletedStudent);


//Update for student data
router.put('/:id', verfiyToken, validateStudentId, studentsController.updateStudent);


module.exports = router;