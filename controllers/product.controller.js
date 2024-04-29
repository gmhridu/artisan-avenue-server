const Product = require("../models/product.model");
const Category = require("../models/category.model")

// Create a new product
const newProduct = async (req, res) => {
  try {
    const body = req.body;
    const result = await Product.create(body)
    res.status(201).json(result)
  }
  catch (err) {
    res.status(500).json(err)
  }
}

// Get all products

const getAllProducts = async (req, res) => {
  try {
    const result = await Product.find({}).populate({ path: 'category', model: Category }).exec();
    console.log('Product data fetched successfully:', result)
    res.status(200).json(result)
  }
  catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Get Single Product By ID

// const getSingleProduct = async (req, res) => {
//   try {
//     const result = await Product.findById(req.params.id)
//     console.log('Product data fetched successfully:', result)
//     res.status(200).json(result)
//   }
//   catch (err) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

// get categories by ID
const getProductByIdWithCategory = async (req, res) => {
  const { id } = req.params;
    try {
    const result = await Product.findById({_id : id}).populate({ path: 'category', model: Category }).exec();
    console.log('Product data fetched successfullyfds sdfsda:', result);
    res.status(200).json(result);
  }
  catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
} 

// update product by id

const updateProduct = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;
    const result = await Product.findByIdAndUpdate({_id: id}, body, {new: true, runValidators: true })
    console.log('Product data updated successfully:', result)
    res.status(200).json(result)
  }
  catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// delete product by id

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Product.findByIdAndDelete({_id: id})
    console.log('Product data deleted successfully:', result)
    res.status(200).json(result)
  }
  catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}


module.exports = { newProduct, getAllProducts, updateProduct, deleteProduct,  getProductByIdWithCategory };

