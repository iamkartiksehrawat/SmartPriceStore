// IMPORTS
const express = require("express");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const index = require("./routes/index.js");
const login = require("./routes/login.js");
const signin = require("./routes/signin.js");
const bodyparser = require("body-parser");
const bcrypt = require("bcrypt");
const session = require("express-session");
const auth = require("./middlewares/auth.js");
const profile = require("./routes/profile.js");
const shop = require("./routes/shop.js");
const addprod = require("./routes/addprod.js");
const cart = require("./routes/cart.js");
const addtocart = require("./routes/addtocart.js");
const mongodbstore = require("connect-mongodb-session")(session);
const app = express();

//SETTING OPTIONS

app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.set("views", "views");
app.set("view engine", "ejs");

const store = new mongodbstore({
  uri: "mongodb+srv://sehrawatkar:4VMJeqTtbE3bMJiG@cluster0.asoz7zk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  collection: "sessions",
});

app.use(
  session({
    secret: "Cronos",
    resave: "false",
    saveUninitialized: "false",
    store: store,
  })
);

//ROUTES

app.use("/login", login);

app.use("/signin", signin);

app.use("/profile", auth, profile);

app.use("/cart", auth, cart);

app.use("/shop", auth, shop);

app.use("/addprod", auth, addprod);

app.use("/addtocart", auth, addtocart);

app.use("/", index);

/// LISTEN & DATABASE CONNECTION

mongoose
  .connect(
    "mongodb+srv://sehrawatkar:4VMJeqTtbE3bMJiG@cluster0.asoz7zk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to mongo db");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
