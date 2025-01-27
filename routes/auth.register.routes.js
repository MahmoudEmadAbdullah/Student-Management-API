const express = require('express');
const router = express.Router();
const validateRegistration = require('../middlewares/registration-validation.middleware');
const uesrRegester = require('../controllers/UserRegistrationController');


//Registration
router.post('/', validateRegistration, uesrRegester);


module.exports = router;