const mongodb = require("mongodb");
const Cart = require("../models/cart.js");
const Prod = require("../models/products.js");

exports.getpage = async (req, res) => {
  let prodid = req.params.id;
  let usr = req.session.user._id;
  try {
    let p = await Prod.findOne({ _id: prodid });
    let c = await Cart.findOne({ userID: usr });
    if (c == null) {
      let newcart = new Cart({
        username: req.session.user.name,
        userID: req.session.user._id,
        products: [
          {
            prodId: new mongodb.ObjectId(prodid),
            quantity: 1,
            prodname: p.prodname,
            produrl: p.produrl,
          },
        ],
      });
      let arr = await newcart.save();
      res.render("cart.ejs", { products: newcart.products });
    } else {
      let indx = -1;
      for (let i = 0; i < c.products.length; i++) {
        if (c.products[i].prodId == prodid) {
          indx = i;
          break;
        }
      }
      if (indx == -1) {
        let newcart = new Cart({
          username: req.session.user.name,
          userID: req.session.user._id,
          products: [
            {
              prodId: new mongodb.ObjectId(prodid),
              quantity: 1,
              prodname: p.prodname,
              produrl: p.produrl,
            },
          ],
        });
        let arr = await newcart.save();
        res.render("cart.ejs", { products: newcart.products });
      } else {
        c.products[indx].quantity = c.products[indx].quantity + 1;
        let arr = await c.save();
        res.render("cart.ejs", { products: c.products });
      }
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

exports.postdata = (req, res) => {
  res.render("cart.ejs");
};
