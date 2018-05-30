// const socketController = require('../controllers/socketController');
let io = null;
let currentConnections = {};

exports.set = (socket) => {
  io = socket;
  io.sockets.on('connection', (connection) => {
    connection.on('data', (data) => {
      connection.user = data.userId;
      currentConnections[data.userId] = { socket: connection, token: data.token };
    });
    connection.on('disconnect', () => {
      delete currentConnections[connection.user];
    });
  });
};

exports.get = () => io;

exports.connections = currentConnections;
