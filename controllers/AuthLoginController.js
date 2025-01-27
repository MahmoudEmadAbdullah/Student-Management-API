const {User} = require('../models/User')
const bcrypt = require('bcrypt');


const userLogin = async (req, res, next) => {
    try{

        //check email
        let user = await User.findOne({email: req.body.email}).exec();
        if(!user){
            const error = new Error("Invalid credentials");
            error.statusCode = 401;
            return next(error);
        }

        //check password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword){
            const error = new Error("Invalid credentials");
            error.statusCode = 401;
            return next(error);
        }

        //Create token
        const token = user.genAuthToken();

        //send res
        res.header('x-auth-token', token);
        res.status(201).json({
            success: true,
            message: 'User logged in successfully',
        })

    } catch(err){
        next(err);
    }
};


module.exports = userLogin;