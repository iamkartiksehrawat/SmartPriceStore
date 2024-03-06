const mongodb = require("mongodb");
const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userschema = new schema({
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
  imageurl: {
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

module.exports = mongoose.model("User", userschema);
