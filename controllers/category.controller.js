const Category = require("../models/category.model");



// Create a new product
const addProduct = async (req, res) => {
  try {
    const body = req.body;
    const result = await Category.create(body)
    res.status(201).json(result)
  }
  catch (err) {
    res.status(500).json(err)
  }
}

// get all categories product
const getAllCategories = async (req, res) => {
  try {
    const result = await Category.find()
   console.log('Product data fetched successfully:', result)
    res.status(200).json(result)
  }
  catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}



module.exports = { addProduct, getAllCategories };

