const express = require('express');

const router = express.Router();
const UserController = require('../controller/users');

// Login
router.post('/login', UserController.login);

// GET DATA
router.get('/', UserController.getAllUsers);

// GET ID DATA
router.get('/:id', UserController.getDataById);

// SEND DATA
router.post('/', UserController.CreateNewUser);

// UPDATE DATA
router.patch('/:idUser', UserController.updatUser);

// Delete
router.delete('/:idUser', UserController.deleteUser);


module.exports = router;