// To handle incoming requests and send back responses

// Create an Express Router instance
const express = require('express'); 
const router = express.Router()
const UserController = require('../controllers/user-controller');

/*
*   APP Routes
*/

// Create a user
router.post('/user', UserController.createUser);

// Update a user
router.patch('/user/:id', UserController.updateUser);

// List users
router.get('/user/list', UserController.listUsers);

// Add test data
//router.post('/addtestdata', UserController.addTestData);

module.exports = router;