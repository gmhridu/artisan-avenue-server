const express = require('express');
const { newProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct, getCategoriesById } = require('../controllers/product.controller');
const productRouter = express.Router();

// create a new product
productRouter.post('/', newProduct);

// get all products
productRouter.get('/', getAllProducts);

// get a single product by id
productRouter.get('/:id', getSingleProduct);

// get categories by product id
productRouter.get('/categories/:id', getCategoriesById);

// update a single product by id
productRouter.put('/:id', updateProduct);

// delete a single product by id
productRouter.delete('/:id', deleteProduct);


module.exports = productRouter;