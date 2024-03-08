const Prod = require("../models/products.js");

exports.getpage = (req, res) => {
  res.render("addprod.ejs");
};

exports.postdata = async (req, res) => {
  const formdata = req.body;
  let p = new Prod({
    sellerid: req.session.user._id,
    prodname: formdata.prodname,
    price: formdata.price,
    imageurl: formdata.imageurl,
    brand: formdata.brand,
    type: formdata.type,
    ram: formdata.ram,
    weight: formdata.weight,
    os: formdata.os,
    gpu: formdata.gpu,
    touchscreen: formdata.touchscreen,
    ips: formdata.ips,
    harddrive: formdata.harddrive,
    ssd: formdata.ssd,
    screenresolution: formdata.screenresolution,
    screensize: formdata.screensize,
  });
  try {
    let arr = await p.save();
    res.render("index.ejs");
  } catch (err) {
    console.log(err);
    throw err;
  }
};
