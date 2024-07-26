const homeController = require("../controllers/homeController");

const express = require("express");
const router = express.Router();

/* GET home page. */

router.get("/", homeController.getAllMessages);

module.exports = router;
