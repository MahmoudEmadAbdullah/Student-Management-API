const {studentCreateSchema, mongoIdSchema} = require('../util/StudentsValidator');


const validateCreateStudent = (req, res, next) => {
        const result = studentCreateSchema.safeParse(req.body);
        if(!result.success){
            const error = new Error('Validation failed');
            error.statusCode = 400;
            error.details = result.error.errors.map(e => e.message);
            return next(error);
        }
        next();
};


const validateStudentId = (req, res, next) => {
        const result = mongoIdSchema.safeParse(req.params.id);
        if(!result.success){
            const error = new Error("Invalid ID format");
            error.statusCode = 400;
            error.details = result.error?.errors.map(e => e.message) || [];
            return next(error);
        }
        next();
};


module.exports = {
    validateCreateStudent,
    validateStudentId
}

