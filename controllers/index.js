const Cart = require("../models/cart");

exports.getpage = async (req, res) => {
  let auth = req.session ? req.session.isauth : false;
  let len = 0;
  if (auth) {
    let usrid = req.session.user._id;
    let cart = await Cart.findOne({ userID: usrid });
    if (cart) {
      len = cart.products.length;
    }
  }
  res.render("index.ejs", {
    isauth: auth,
    cartlen: len,
  });
};

exports.postdata = (req, res) => {
  res.render("index.ejs");
};
