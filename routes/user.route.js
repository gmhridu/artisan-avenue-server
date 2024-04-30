const express = require('express');
const { createUser, getAllUser, getSingleUser, updateUser, deleteUser, getUserByEmail } = require('../controllers/user.controller');
const userRouter = express.Router();


// create user
userRouter.post('/', createUser);

// get all users
userRouter.get('/', getAllUser);

// get single users by id
userRouter.get('/:id', getSingleUser);

//get user by email
userRouter.get('/', getUserByEmail);

// update users by id
userRouter.put('/:id', updateUser);

// delete users by id
userRouter.delete('/:id', deleteUser);


module.exports = userRouter;