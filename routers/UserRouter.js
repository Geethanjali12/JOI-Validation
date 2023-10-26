const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.post('/user', userController.createuser);

module.exports = router;