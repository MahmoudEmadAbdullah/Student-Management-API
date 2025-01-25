const express = require('express');
const router = express.Router();
const userValidator = require('../middlewares/UsersValidatorsMW');
const {User} = require('../models/UsersModelDB');
const bcrypt = require('bcrypt');


//Registration
router.post('/', userValidator, async (req, res, next) => {
    try{

    //Check already exists
    let user = await User.findOne({email: req.body.email}).exec()
    if(user){
        return res.status(400).json({Message: 'User already Registerd'});
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
    res.status(201).json({ message: 'User registered successfully' });
    
    } catch(err){
        next(err);
    }
});


module.exports = router;