const {User} = require('../models/UsersModelDB')
const bcrypt = require('bcrypt');


const userLogin = async (req, res, next) => {
    try{

        //check email
        let user = await User.findOne({email: req.body.email}).exec();
        if(!user){
            return res.status(400).json({Message: "Invalid credentials"});
        }

        //check password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword){
            return res.status(400).json({Message: "Invalid credentials"});
        }

        //Create token
        const token = user.genAuthToken();

        //send res
        res.header('x-auth-token', token);
        res.status(201).json({ message: 'User logged in successfully'})

    } catch(err){
        next(err);
    }
};


module.exports = userLogin;