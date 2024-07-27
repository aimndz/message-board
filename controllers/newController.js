const db = require("../db/queries");

async function createMessage(req, res) {
  const newMessage = {
    user: req.body.userInput,
    message: req.body.textInput,
  };

  await db.insertMessage(newMessage.user, newMessage.message);
  res.redirect("/");
}

module.exports = { createMessage };
