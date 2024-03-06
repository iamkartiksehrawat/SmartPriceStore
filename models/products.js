const mongodb = require("mongodb");
const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userschema = new schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  ram: {
    type: String,
  },
  weight: {
    type: String,
  },
  os: {
    type: String,
  },
});

module.exports = mongoose.model("User", userschema);
