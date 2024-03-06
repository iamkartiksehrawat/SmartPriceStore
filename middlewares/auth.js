module.exports = (req, res, next) => {
  if (req.session.isauth) {
    next();
  } else {
    res.redirect("/login");
  }
};
