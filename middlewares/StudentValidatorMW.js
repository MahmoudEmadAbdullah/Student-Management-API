const {create_schema, id_schema} = require('../util/StudentsValidator');


const validateCreateStudent = (req, res, next) => {
    try{
        create_schema.parse(req.body);
        next();
    } catch(err){
        res.status(400).json({error: err.errors.map(e => e.message)});
    }
};


const validateStudentId = (req, res, next) => {
    try{
        id_schema.parse({id: req.params.id});
        next();
    } catch(err){
        if(err.errors){
            res.status(400).json({error: err.errors.map(e => e.message)});
        } else{
            res.status(400).json({ error: 'Invalid ID format' });
        }
    }
};


module.exports = {
    validateCreateStudent,
    validateStudentId
}

