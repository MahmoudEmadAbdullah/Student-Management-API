const {registrationSchema} = require('../util/UsersValidator');


const userValidator = (req, res, next) => {
    try{
        registrationSchema.parse(req.body);
        next();
    } catch(err){
        const errors = err.errors ? err.errors.map(e => e.message) : [err.message];
        return res.status(400).json({ errors });
    }
};


module.exports = userValidator;