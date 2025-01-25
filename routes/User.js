const express = require('express');
const router = express.Router();
const userValidator = require('../middlewares/UsersValidatorsMW');
const uesrRegester = require('../controllers/UserController');


//Registration
router.post('/', userValidator, uesrRegester);


module.exports = router;