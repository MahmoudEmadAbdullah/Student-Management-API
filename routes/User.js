const express = require('express');
const router = express.Router();
const userValidator = require('../middlewares/usersValidatorsMW');
const uesrRegester = require('../controllers/userController');


//Registration
router.post('/', userValidator, uesrRegester);


module.exports = router;