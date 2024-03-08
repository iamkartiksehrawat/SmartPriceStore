const mongodb = require("mongodb");
const Cart = require("../models/cart.js");
const Prod = require("../models/products.js");

exports.getpage = async (req, res) => {
  let prodid = req.params.id;
  let usrid = req.session.user._id;
  try {
    let cart = await Cart.findOne({ userID: usrid });
    if (!cart) {
      let newcart = new Cart({
        username: req.session.user.name,
        userID: usrid,
        products: [{ prodId: new mongodb.ObjectId(prodid), quantity: 1 }],
      });
      let arr = await newcart.save();
      res.redirect("/cart");
    } else {
      let indx = -1;
      let prodarr = cart.products;
      for (let i = 0; i < prodarr.length; i++) {
        if (prodarr[i].prodId == prodid) {
          indx = i;
          break;
        }
      }
      if (indx == -1) {
        cart.products.push({
          prodId: new mongodb.ObjectId(prodid),
          quantity: 1,
        });
        let result = await cart.save();
        res.redirect("/cart");
      } else {
        cart.products[indx].quantity = cart.products[indx].quantity + 1;
        let result = await cart.save();
        res.redirect("/cart");
      }
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

exports.postdata = (req, res) => {
  res.render("cart.ejs");
};
