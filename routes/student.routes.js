const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/StudentController');
const {validateCreateStudent, validateUpdateStudent, validateStudentId} = require('../middlewares/student.validation');
const verifyAdminToken = require('../middlewares/admin-auth.middleware');


//Request all students
router.get('/', studentsController.getAllStudents);


//Request Students by id (URL Parameter)
router.get('/:id', validateStudentId, studentsController.getStudentById);


//Create new student
router.post('/', verifyAdminToken, validateCreateStudent, studentsController.createStudent);


//Delete existing student
router.delete('/:id', verifyAdminToken, validateStudentId, studentsController.deletedStudent);


//Update for student data
router.put('/:id', 
            verifyAdminToken, 
            validateStudentId, 
            validateUpdateStudent,
            studentsController.updateStudent);


module.exports = router;