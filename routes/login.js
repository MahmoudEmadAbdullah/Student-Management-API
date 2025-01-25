const express = require('express');
const router = express.Router();
const loginValidator = require('../middlewares/loginValidatorMW');
const userLogin = require('../controllers/LoginConroller');


//Login
router.post('/', loginValidator, userLogin);


module.exports = router;