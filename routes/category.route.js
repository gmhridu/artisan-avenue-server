const express = require('express');
const categoryRouter = express.Router();
const { addProduct, getAllCategories, getSingleCategory, updateCategory, deleteCategory } = require('../controllers/category.controller');

// create categories
categoryRouter.post('/', addProduct);

// get all categories
categoryRouter.get('/', getAllCategories);

// get single categories by id
categoryRouter.get('/:id', getSingleCategory);

// update categories by id
categoryRouter.put('/:id', updateCategory);

// delete categories by id
categoryRouter.delete('/:id', deleteCategory);


module.exports = categoryRouter;