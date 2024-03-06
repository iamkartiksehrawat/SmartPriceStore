exports.getpage = (req, res) => {
  console.log(req.session);
  let auth = req.session ? req.session.isauth : false;
  res.render("index.ejs", {
    isauth: auth,
  });
};

exports.postdata = (req, res) => {
  res.render("index.ejs");
};
