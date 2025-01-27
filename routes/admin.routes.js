const express = require('express');
const router = express.Router();
const verifyAdminToken = require('../middlewares/admin-auth.middleware');
const adminUser = require('../controllers/AdminController');

//update
router.put('/:id', verifyAdminToken, adminUser);


module.exports = router;