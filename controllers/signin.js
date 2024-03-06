const User = require("../models/user.js");
const bcrypt = require("bcrypt");

exports.getpage = (req, res) => {
  res.render("signin.ejs");
};

exports.postdata = async function (req, res) {
  const formdata = req.body;
  try {
    let hashedpassword = await bcrypt.hash(formdata.password, 12);
    let p = new User({
      name: formdata.username,
      email: formdata.email,
      password: hashedpassword,
    });
    let arr = await p.save();
    res.render("login.ejs");
  } catch (err) {
    console.log(err);
    throw err;
  }
};
