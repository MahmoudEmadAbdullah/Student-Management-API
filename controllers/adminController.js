const {User} = require('../models/UsersModelDB');

const adminUser = async (req, res, next) => {
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
};


module.exports = adminUser;