const db = require("../db/queries");
const { formatMessages } = require("../public/javascripts/utils");

async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();
  const formattedMessages = formatMessages(messages);

  res.render("index", { messages: messages });
}

module.exports = { getAllMessages };
