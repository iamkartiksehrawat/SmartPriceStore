const express = require("express");
const router = express.Router();
const controller = require("../controllers/signin.js");

router.get("/", controller.getpage);

router.post("/", controller.postdata);

module.exports = router;
