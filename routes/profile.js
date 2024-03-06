const express = require("express");
const router = express.Router();
const controller = require("../controllers/profile.js");

router.get("/", controller.getpage);

module.exports = router;
