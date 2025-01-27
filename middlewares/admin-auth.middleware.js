const jwt = require('jsonwebtoken');
const config = require('config');

const verifyAdminToken = (req, res, next) => {
    const token = req.header('x-auth-token');

    if(!token){
        const error = new Error('Access denied. No token provided');
        error.statusCode = 401;
        return next(error);
    }

    try{
        const decodedPayLoad = jwt.verify(token, config.get('jwt.secret'));
        if(!decodedPayLoad.adminRole){
            const error = new Error('Access denied.');
            error.statusCode = 403;
            return next(error);
        }

        req.user = decodedPayLoad;
        next();

    } catch(err){
        const error = new Error('Invalid token.');
        error.statusCode = 401;
        next(error)
    }
};

module.exports = verifyAdminToken;