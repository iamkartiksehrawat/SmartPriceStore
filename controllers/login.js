const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.getpage = (req, res) => {
  res.render("login.ejs");
};

exports.postdata = (req, res) => {
  const formdata = req.body;
  User.findOne({ email: formdata.email })
    .then((arr) => {
      if (!arr) {
        console.log("No user  found!");
        res.render("login.ejs");
      } else {
        bcrypt
          .compare(formdata.password, arr.password)
          .then((val) => {
            if (val) {
              req.session.isauth = true;
              req.session.user = arr;
              res.render("index.ejs", { isauth: true });
            } else {
              console.log("wrong password");
              res.render("login.ejs");
            }
          })
          .catch((err) => {
            console.log(err);
            throw err;
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
