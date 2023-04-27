import{
    getAll,
    addNewUser,
    getUserById,
    updateUser,
    deleteUser,
    searchByOp,
    searchByListOfId,
    userPro
}from '../controllers/userController.js'

import express from 'express';
const router = express().Router()

// Get all users
app.get('/users',);


// add new user 
app.post('/addNewUser',);


// get oneUser by id 
app.get('/oneUser',)


// Update user
app.put('/users/:id',);


// Delete user
app.delete('/users/:id',);


// Search for user where name starts with "a" and age less than 30
app.get('/users/op',);


// Search for users by list of ids
app.get('/users/users',);