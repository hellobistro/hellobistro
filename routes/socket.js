// const socketController = require('../controllers/socketController');
let io = null;
let currentConnections = {};

exports.set = (socket) => {
  io = socket;
  io.sockets.on('connection', (connection) => {
    console.log('connection established: ', connection.id)
    connection.on('user', (userId) => {
      console.log('saving user to log', userId);
      connection.user = userId;
      currentConnections[userId] = { socket: connection };
    });
    connection.on('disconnect', () => {
      console.log('disconnecting user: ', connection.id);
      delete currentConnections[connection.user];
    });
  });
};

exports.get = () => io;

exports.connections = currentConnections;
