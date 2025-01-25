const mongoose = require('mongoose');
const valid = require('validator');
const jwt = require('jsonwebtoken');
const config = require('config');

//Create Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (val) => {
                return valid.isEmail(val);
            },
            message: "Please enter a valid email address"
        }
    },
    isAdmin: {
        type: Boolean
    },
    password: {
        type: String,
        required: true,
        minLength: 32,
        maxLength: 100,
        validate: {
            validator: (val) => {
                return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(val);
            },
            message: "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
        }
    }
});


//generate token
userSchema.methods.genAuthToken = function(){
    const jwtSecret = config.get('jwt.secret');
    if(!jwtSecret){
        throw new Error('JWT secret key is not defined. Please check your configuration.');
    }
    return jwt.sign(
        {
            userId: this._id,
            adminRole: this.isAdmin,
            email: this.email
        },
        jwtSecret
    );
};


//Create Model
const User = mongoose.model("users", userSchema)

module.exports = {User};