const mongodb = require("mongodb");
const mongoose = require("mongoose");

const schema = mongoose.Schema;

const prodschema = new schema({
  sellerid: {
    type: String,
    required: true,
  },
  prodname: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  produrl: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
  },
  type: {
    type: String,
  },
  ram: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  os: {
    type: String,
  },
  gpu: {
    type: String,
  },
  touchscreen: {
    type: String,
  },
  ips: {
    type: String,
  },
  harddrive: {
    type: Number,
  },
  ssd: {
    type: Number,
  },
  screenresolution: {
    type: Number,
  },
  screensize: {
    type: Number,
  },
});

module.exports = mongoose.model("Products", prodschema);
