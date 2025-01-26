const {authSchema} = require('../util/loginValidator');

const loginValidator = (req, res, next) => {
        const result = authSchema.safeParse(req.body);
        if(!result.success){
            const error = new Error("Login validation failed");
            error.statusCode = 400;
            error.details = result.error.errors.map(e => e.message);
            return next(error);
        }
        next();
};

module.exports = loginValidator;