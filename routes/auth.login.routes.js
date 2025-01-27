const express = require('express');
const router = express.Router();
const loginValidator = require('../middlewares/login-data.validation');
const userLogin = require('../controllers/AuthLoginController');


//Login
router.post('/', loginValidator, userLogin);


module.exports = router;