const Joi = require("joi-browser");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      name: {
        type: String,
        minlength: 3,
        required: true,
      },
      description: {
        type: String,
        minlength: 5,
      },
      price: {
        type: Number,
        min: 0,
        required: true,
      },
      quantity: {
        type: Number,
        min: 0,
        required: true,
      },
      image: String,
    },
  ],
  totalPrice: {
    type: Number,
    min: 0,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  dateOfOrder: {
    type: Date,
    default: Date.now,
  },
});
const Order = mongoose.model("Order", orderSchema);

function validateOrder(order) {
  const schema = {
    user: Joi.objectId().required(),
    products: Joi.array().items(Joi.object()),
    totalPrice: Joi.number().min(0).required(),
    paymentMethod: Joi.string().required(),
    status: Joi.string().required(),
  };
  return Joi.validate(order, schema);
}

exports.Order = Order;
exports.validateOrder = validateOrder;
