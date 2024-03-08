const Cart = require("../models/cart.js");

exports.getpage = async (req, res) => {
  let usrid = req.session.user._id;
  let arr = await Cart.find({ userID: usrid });
  console.log(arr);
  if (arr.length == 0) {
    res.render("cart.ejs", { products: [] });
  }
  res.render("cart.ejs", { products: arr[0].products });
};

exports.postdata = (req, res) => {
  res.render("cart.ejs");
};
