const express = require('express');
const router = express.Router();
const {User} = require('../models/UsersModelDB');
const verfiyToken = require('../middlewares/AuthMWPermission');

//update
router.put('/:id', verfiyToken, async (req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            {isAdmin: true}
        );
    
        if(!updateUser){
            return res.status(404).json({message: 'User Not Found'});
        }

        res.json({message: 'User is Set to admin', user: updateUser});
    } catch(err){
        next(err);
    }
});


module.exports = router;