const {User} = require('../models/User');

const adminUser = async (req, res, next) => {
    try {

        if(!req.params.id.match(/^[0-9a-fA-F]{24}$/)){
            const error = new Error('Invalid User ID');
            error.statusCode = 400;
            return next(error);
        }

        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            {isAdmin: true}
        );
    
        if(!updateUser){
            const error = new Error('User Not Found');
            error.statusCode = 404;
            return next(error);
        }

        res.json({
            success: true,
            message:'User promoted to admin successfully',
            user: updateUser
        });

    } catch(err){
        next(err);
    }
};


module.exports = adminUser;