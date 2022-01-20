const mongoose = require("mongoose");
module.exports = function () {
  mongoose
    .connect("mongodb://localhost/groceryStore", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Connected to mongodb...");
    });
};
