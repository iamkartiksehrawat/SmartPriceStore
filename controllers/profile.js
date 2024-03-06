exports.getpage = (req, res) => {
  res.render("profile.ejs", {
    user: req.session.user,
  });
};
