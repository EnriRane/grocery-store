const _ = require("lodash");
const express = require("express");
const router = express.Router();
const { Product, validateProduct } = require("../models/product");

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

router.post("/", async (req, res) => {
  const { error } = validateProduct(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const products = await Product.find({ name: req.body.name });
  if (products.length !== 0) {
    return res.status(400).send("Product already exists");
  }
  const product = new Product(
    _.pick(
      req.body,
      "name",
      "description",
      "numberInStock",
      "price",
      "dateAdded",
      "image"
    )
  );

  res.send(await product.save());
});

router.put("/:id", async (req, res) => {
  const { error } = validateProduct(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      numberInStock: req.body.numberInStock,
      price: req.body.price,
      image: req.body.image,
    },
    { new: true }
  );
  if (!product)
    return res.status(404).send("Product with given id was not found");
  res.send(product);
});

router.delete("/:id", async (req, res) => {
  const product = await Product.findByIdAndRemove(req.params.id);
  if (!product)
    return res.status(404).send("Product with given id was not found");
  res.send(product);
});

router.get("/:id", async (req, res) => {
  if (req.params.id === "new") {
    const product = await Product.find({}).sort({ _id: -1 }).limit(2);
    res.send(product);
  }
  const product = await Product.findById(req.params.id);
  if (!product)
    return res.status(404).send("Product with given id was not found");

  res.send(product);
});
module.exports = router;
