const { format } = require("date-fns");

function formatMessages(messages) {
  const formattedMessages = messages.forEach((message) => {
    message.created_at = format(
      new Date(message.created_at),
      "MMM d, yyyy h:mm a"
    );
  });

  console.log(formatMessages);
}

module.exports = { formatMessages };
