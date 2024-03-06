const express = require("express");
const index = require("./routes/index.js");
const app = express();

app.use("/", index);

app.listen(3000);
