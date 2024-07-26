const db = require("../db/queries");

async function createMessage(req, res) {
  const newMessage = {
    user: req.body.userInput,
    message: req.body.textInput,
  };

  await db.createMessage(...newMessage);
  res.redirect("/");
}

module.exports = { createMessage };
