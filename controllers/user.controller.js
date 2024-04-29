const User = require("../models/user.model");



// Create a new user
const createUser = async (req, res) => {
  try {
    const body = req.body;
    const result = await User.create(body)
    res.status(201).json(result)
  }
  catch (err) {
    res.status(500).json(err)
  }
}

// Get all users
const getAllUser = async (req, res) => {
  try {
    const result = await User.find()
    console.log('User data fetched successfully:', result)
    res.status(200).json(result)
  }
  catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Get a single user

const getSingleUser = async (req, res) => {
  try {
    const result = await User.findById(req.params.id)
    console.log('User data fetched successfully:', result)
    res.status(200).json(result)
  }
  catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Update a single user

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await User.findByIdAndUpdate({ _id: id }, body,  {new: true, runValidators: true })
    console.log('User data updated successfully:', result)
    res.status(200).json(result)
  }
  catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Delete a single user

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findByIdAndDelete({ _id: id })
    console.log('User data deleted successfully:', result)
    res.status(200).json(result)
  }
  catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}


module.exports = { createUser, getAllUser, getSingleUser, updateUser, deleteUser };