const express = require("express");
const router = express.Router();
const controller = require("../controllers/index.js");

router.get("/", controller.getpage);

router.post("/", controller.postdata);

module.exports = router;
