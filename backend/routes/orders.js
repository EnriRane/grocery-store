const _ = require("lodash");
const express = require("express");
const router = express.Router();
const { Order, validateOrder } = require("../models/order");
const { Product } = require("../models/product");

router.get("/", async (req, res) => {
  const aggregateResult = await Order.aggregate([
    {
      $unwind: {
        path: "$products",
      },
    },
    {
      $group: {
        _id: "$products._id",
        totalQuantitySold: {
          $sum: "$products.quantity",
        },
        product: {
          $addToSet: "$products",
        },
      },
    },
    {
      $sort: {
        totalQuantitySold: -1,
      },
    },
    {
      $limit: 2,
    },
  ]);
  let mostSoldProduct = [];
  for (let item of aggregateResult) {
    delete item.product[0].quantity;
    mostSoldProduct.push({
      totalQuantitySold: item.totalQuantitySold,
      product: item.product[0],
    });
  }
  res.send(mostSoldProduct);
});

router.post("/", async (req, res) => {
  const { error } = validateOrder(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const order = new Order(
    _.pick(
      req.body,
      "user",
      "products",
      "totalPrice",
      "paymentMethod",
      "status"
    )
  );
  const products = req.body.products;
  for (let product of products) {
    await Product.updateOne(
      { _id: product._id },
      { $inc: { numberInStock: -product.quantity } }
    );
  }
  res.send(await order.save());
});

module.exports = router;
