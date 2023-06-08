const express = require('express');
const router = express.Router();
const UserController = require('../controller/users');

// Login
router.post('/login', UserController.login);
// Create DATA
router.post('/register', UserController.CreateNewUser);

module.exports = router;