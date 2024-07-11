const express = require("express");
const router = express.Router();

router.post("/new", function (req, res) {
  const newMessage = {
    user: req.body["user-input"],
    text: req.body["text-input"],
    added: new Date(),
  };
});
