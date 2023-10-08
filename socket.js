const socket = io();

window.addEventListener('DOMContentLoaded', function() {
  var senderInput = document.getElementById('sender-input');
  var receiverInput = document.getElementById('receiver-input');
  var messageInput = document.getElementById('message-input');
  var chatDisplay = document.getElementById('chat-display');
  var sendButton = document.getElementById('send-button');

  sendButton.addEventListener('click', function() {
    var sender = senderInput.value.trim();
    var receiver = receiverInput.value.trim();
    var message = messageInput.value.trim();

    if (sender !== '' && receiver !== '' && message !== '') {
      var chatMessage = `${sender} to ${receiver}: ${message}`;

      socket.emit('chatMessage', { sender, receiver, message });

      var messageElement = document.createElement('div');
      messageElement.textContent = chatMessage;
      chatDisplay.appendChild(messageElement);

      senderInput.value = '';
      receiverInput.value = '';
      messageInput.value = '';
    }
  });

  messageInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      sendButton.click();
    }
  });

  socket.on('message', function(data) {
    var chatMessage = `${data.sender} to ${data.receiver}: ${data.message}`;

    var messageElement = document.createElement('div');
    messageElement.textContent = chatMessage;
    chatDisplay.appendChild(messageElement);
  });
});