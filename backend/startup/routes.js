var cors = require("cors");
const express = require("express");
const products = require("../routes/products");
const users = require("../routes/users");
const auth = require("../routes/auth");
const orders = require("../routes/orders");
const error = require("../middleware/error");
const stripe = require("../routes/stripe");
module.exports = function (app) {
  app.use(express.json());
  app.use(cors());
  app.use("/api/products", products);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
  app.use("/api/orders", orders);
  app.use("/api/payment", stripe);
  app.use(error);
};
