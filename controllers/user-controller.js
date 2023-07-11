// To handle user-related operations

require('../models/database');
const { json } = require('body-parser');
const User = require('../models/user');

// Create a user
const createUser = async (req, res) => {
    try {
        const { name, email, dob, gender } = req.body;

        // Create a new user using the User model
        const newUser = await User.create({ name, email, dob, gender });
        
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create a user' });
    }
};

// Update a user
const updateUser = async (req, res) => {
    try {
     const { id } = req.params;
     const {name, email, dob, gender } = req.body;
     
     // Find the user by ID and update the fields
     const updatedUser = await User.findByIdAndUpdate(
        id,
        { name, email, dob, gender },
        { new: true }
     );

     if(!updatedUser){
        return res.status(404).json({ error: 'User not found' });
     }

     res.json(updatedUser);
    }catch (error) {
        res.status(500).json({ error: 'Failed to update the user' });
    }
};

// List users
const listUsers = async (req, res) => {
    try {
        // Retrieve all users from the User model
        const users = await User.find();

        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
};

// Delete a user
//const deleteUser = async (req, res) => {}

module.exports = {
    createUser,
    updateUser,
    listUsers,
    //deleteUser,
};