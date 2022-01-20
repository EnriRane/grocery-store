const express = require("express");
const router = express.Router();
const config = require("config");
const stripe = require("stripe")(config.get("stripeKey"));
const { v4: uuid } = require("uuid");

router.post("/", async (req, res) => {
  const { orderedProducts: products, token, totalPrice } = req.body;
  const customer = await stripe.customers.create({
    email: token.email,
    source: token.id,
  });
  let list = "";
  for (item of products) {
    list = list + " " + item.name + " : " + item.quantity;
  }
  const idempotencyKey = uuid();
  const charge = await stripe.charges.create(
    {
      amount: totalPrice * 100,
      currency: "usd",
      customer: customer.id,
      receipt_email: token.email,
      description: `Purchased : ${list}`,
      shipping: {
        name: token.card.name,
        address: {
          line1: token.card.address_line1,
          line2: token.card.address_line2,
          city: token.card.address_city,
          country: token.card.address_country,
          postal_code: token.card.address_zip,
        },
      },
    },
    {
      idempotencyKey,
    }
  );

  const status = "success";

  res.json(status);
});

module.exports = router;
