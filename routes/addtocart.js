const express = require("express");
const router = express.Router();
const controller = require("../controllers/addtocart.js");

router.get("/:id", controller.getpage);

router.post("/:id", controller.postdata);

module.exports = router;
