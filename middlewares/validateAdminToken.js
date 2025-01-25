const jwt = require('jsonwebtoken');
const config = require('config');

const verifyAdminToken = (req, res, next) => {

    //Get x-auth-token header
    const token = req.header('x-auth-token');
    if(!token){
        return res.status(401).json({message: 'Access denied. No token provided'});
    }

    try{
        const decodedPayLoad = jwt.verify(token, config.get('jwt.secret'));
        if(!decodedPayLoad.adminRole){
            return res.status(401).json({message: 'Access denied.'})
        }
        // req.user = decodedPayLoad;
        next();
    } catch(err){
        res.status(400).json({ message: 'Invalid token.' });
    }
}

module.exports = verifyAdminToken;