const Joi = require("joi-browser");
const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 100,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    minlength: 5,
  },
  numberInStock: {
    type: Number,
    min: 0,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    minlength: 3,
  },
});
const Product = mongoose.model("Product", productSchema);

function validateProduct(product) {
  const schema = {
    name: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(3).max(80),
    numberInStock: Joi.number().integer().min(0).required(),
    price: Joi.number().min(0).required(),
    image: Joi.string(),
  };
  return Joi.validate(product, schema);
}

exports.Product = Product;
exports.validateProduct = validateProduct;
