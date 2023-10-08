const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Serve static files from the public directory
app.use(express.static('public'));

// Handle socket connections
io.on('connection', function(socket) {
  console.log('A user connected');

  socket.on('chatMessage', function(data) {
    io.emit('message', data);
  });

  socket.on('disconnect', function() {
    console.log('A user disconnected');
  });
});

// Start the server
const port = 3000;
http.listen(port, function() {
  console.log(`Server is running on http://localhost:${port}`);
});