const express = require('express');
const { newProduct, getAllProducts,  updateProduct, deleteProduct, getProductByIdWithCategory, getProductWithEmail } = require('../controllers/product.controller');
const productRouter = express.Router();

// create a new product
productRouter.post('/', newProduct);

// get all products
productRouter.get('/', getAllProducts);

// get a single product by id
// productRouter.get('/:id', getSingleProduct);

// get product with email
productRouter.get('/', getProductWithEmail);

// get categories by product id
productRouter.get('/:id', getProductByIdWithCategory);

// update a single product by id
productRouter.put('/:id', updateProduct);

// delete a single product by id
productRouter.delete('/:id', deleteProduct);


module.exports = productRouter;