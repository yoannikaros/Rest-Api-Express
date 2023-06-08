const express = require('express');
const router = express.Router();
const UserController = require('../controller/users');
const authenticateToken = require('../middleware/authenticateToken')

// GET DATA
// router.get('/', UserController.getAllUsers);
router.get('/', authenticateToken, UserController.getAllUsers);

// GET ID DATA
router.get('/:id', authenticateToken, UserController.getDataById);

// Create DATA
router.post('/', authenticateToken, UserController.CreateNewUser);

// UPDATE DATA
router.patch('/:idUser', authenticateToken, UserController.updatUser);

// Delete
router.delete('/:idUser', authenticateToken, UserController.deleteUser);


module.exports = router;