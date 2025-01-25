const {authSchema} = require('../util/authValidator');

const authValidator = (req, res, next) => {
    try{
        authSchema.parse(req.body);
        next();
    } catch(err){
        const errors = err.errors ? err.errors.map(e => e.message) : [err.message];
        res.status(400).json({errors})
    }
}

module.exports = authValidator;