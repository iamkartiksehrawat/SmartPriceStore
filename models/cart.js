const mongodb = require("mongodb");
const mongoose = require("mongoose");

const schema = mongoose.Schema;

const cartschema = new schema({
  username: { type: String, required: true },
  userID: { type: String, required: true },
  products: [
    {
      prodId: { type: String, required: true },
      prodname: { type: String, required: true },
      produrl: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("Cart", cartschema);
