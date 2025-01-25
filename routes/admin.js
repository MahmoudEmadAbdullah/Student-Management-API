const express = require('express');
const router = express.Router();
const verifyAdminToken = require('../middlewares/validateAdminToken');
const adminUser = require('../controllers/adminController');

//update
router.put('/:id', verifyAdminToken, adminUser);


module.exports = router;