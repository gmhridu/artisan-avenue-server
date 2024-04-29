const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
  },
  image: {
    type: String,
    required: true,
  },
  hoveredImg: {
    type: String,
    required: true,
  },
    rating: {
      type: Number,
      default: 0,
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;

