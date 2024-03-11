const botToken = '6869873739:AAFV40kQgbbEcrtg7r2hIU1bQ6DM_XbK4RI';
const chatId = '-4131554140'; // ID группы или пользователя

const form = document.getElementById('modal-cons-form');
console.log(form);
form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const message = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: JSON.stringify(message),
        }),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to send message');
    }
    console.log('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
  }
});
