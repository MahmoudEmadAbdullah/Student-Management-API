const {User} = require('../models/User');
const bcrypt = require('bcrypt');


const uesrRegester = async (req, res, next) => {
    try{

    //Check already exists
    let user = await User.findOne({email: req.body.email}).exec()
    if(user){
        const error = new Error('User already Registerd');
        error.statusCode = 400;
        return next(error);
    }

    //Hash Password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    //Create new user to be add to DB
    user = new User({
        name: req.body.name,
        email: req.body.email,
        isAdmin: req.body.isAdmin,
        password: hashedPassword,
    });

    await user.save();

    //Generate token after successful registration
    const token = user.genAuthToken();

    res.header('x-auth-token', token);
    res.status(201).json({
        success: true,
        message: 'User registered successfully' 
    });
    
    } catch(err){
        next(err);
    }
};



module.exports = uesrRegester;