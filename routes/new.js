const { format } = require("date-fns");
const messages = require("../public/javascripts/constant");

const express = require("express");
const router = express.Router();

router.post("/", function (req, res) {
  const newMessage = {
    user: req.body.userInput,
    text: req.body.textInput,
    added: format(new Date(), "MMM d, yyyy, h:mm a"),
  };

  messages.push(newMessage);
  res.redirect("/");
});

module.exports = router;
