const { format } = require("date-fns");

const messages = [
  {
    text: "Hello world!",
    user: "Amiel",
    added: format(new Date(), "MMM d, yyyy, h:mm a"),
  },
];

module.exports = messages;
