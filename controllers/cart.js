const Cart = require("../models/cart.js");
const products = require("../models/products.js");

exports.getpage = async (req, res) => {
  let usrid = req.session.user._id;
  try {
    let arr = await Cart.findOne({ userID: usrid }).populate("products.prodId");
    if (!arr) {
      res.render("cart.ejs", { products: [] });
    } else {
      res.render("cart.ejs", { products: arr.products });
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

exports.postdata = (req, res) => {
  res.render("cart.ejs");
};
