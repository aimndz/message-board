const { format } = require("date-fns");
const express = require("express");
const router = express.Router();

/* GET home page. */

const messages = [
  {
    text: "Hello world!",
    user: "Amiel",
    added: format(new Date(), "MMM d, yyyy, h:mm a"),
  },
];

router.get("/", function (req, res, next) {
  res.render("index", { messages: messages });
});

router.post("/new", function (req, res) {
  const newMessage = {
    user: req.body["user-input"],
    text: req.body["text-input"],
    added: format(new Date(), "MMM d, yyyy, h:mm a"),
  };

  messages.push(newMessage);
  res.redirect("/");
});

module.exports = router;
