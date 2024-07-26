const { format } = require("date-fns");
const newController = require("../controllers/newController");

const express = require("express");
const router = express.Router();

router.post("/", newController.createMessage);

module.exports = router;
