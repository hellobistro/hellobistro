// const socketController = require('../controllers/socketController');
let io = null;
let currentConnections = {};

exports.set = (socket) => {
  io = socket;
  io.sockets.on('connection', (connection) => {
    console.log('connection established: ', connection.id)
    connection.on('data', (data) => {
      connection.user = data.userId;
      currentConnections[data.userId] = { socket: connection, token: data.token };
    });
    connection.on('disconnect', () => {
      console.log('disconnecting user: ', connection.id);
      delete currentConnections[connection.user];
    });
  });
};

exports.get = () => io;

exports.connections = currentConnections;
