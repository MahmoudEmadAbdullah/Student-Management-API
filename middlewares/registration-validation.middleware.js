const {registrationSchema} = require('../schemas/register.schema');


const validateRegistration = (req, res, next) => {
        const result = registrationSchema.safeParse(req.body);
        if(!result.success){
            const error = new Error("Validation failed");
            error.statusCode = 400;
            error.details = result.error.errors.map(e => e.message);
            return next(error);
        }
        next();
};


module.exports = validateRegistration;