// socket.js
const socketIO = require('socket.io');

function setupSocket(server) {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('New client connected');

   socket.on('deleteHistory', () => {
      // Perform the deletion logic
      // ...

      // Emit the "historyDeleted" event
      io.emit('historyDeleted');
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
}

module.exports = setupSocket;