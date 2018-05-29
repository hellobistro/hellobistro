// const socketController = require('../controllers/socketController');
let io = null;
let currentConnections = {};

exports.set = (socket) => {
  io = socket;
  io.sockets.on('connection', (client) => {
    console.log('new connection', client.id);
    currentConnections[client.id] = { socket: client };
    client.emit('welcome', 'hello, bistro!');
    client.on('data', (someData) => {
      currentConnections[client.id].data = someData;
      console.log('currentConnections: ', currentConnections[client.id].data);
    });
    client.on('disconnect', () => {
      console.log('disconnecting', client.id);
      delete currentConnections[client.id];
    });
  });
};

exports.get = () => io;

exports.connections = currentConnections;
