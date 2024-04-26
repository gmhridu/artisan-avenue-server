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



module.exports = { addProduct };

