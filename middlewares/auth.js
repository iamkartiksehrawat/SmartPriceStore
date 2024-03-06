module.exports = (req, res) => {
  if (req.session.isauth) {
    next();
  }
  res.redirect("/login");
};
