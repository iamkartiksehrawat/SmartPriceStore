const express = require("express");
const router = express.Router();
const controller = require("../controllers/login.js");

router.get("/", controller.getpage);

router.post("/", controller.postdata);

module.exports = router;
