exports.getpage = (req, res) => {
  let auth = req.session ? req.session.isauth : false;
  res.render("index.ejs", {
    isauth: auth,
  });
};

exports.postdata = (req, res) => {
  res.render("index.ejs");
};
