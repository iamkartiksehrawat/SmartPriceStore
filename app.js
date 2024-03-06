const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3000);
