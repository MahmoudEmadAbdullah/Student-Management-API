const express = require('express');
const router = express.Router();
const verfiyToken = require('../middlewares/AuthMWPermission');
const adminUser = require('../controllers/adminController');

//update
router.put('/:id', verfiyToken, adminUser);


module.exports = router;