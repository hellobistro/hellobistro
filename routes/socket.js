// const socketController = require('../controllers/socketController');
let io = null;
let customerConnections = {};
let restaurantConnections = {};

exports.set = (socket) => {
  io = socket;
  io.sockets.on('connection', (connection) => {
    console.log('connection established: ', connection.id)
    connection.on('user', (user) => {
      connection.user = user.userId;
      connection.userType = user.userType;
      if (connection.userType === 'Restaurant') {
        console.log('saving restaurant user to socket log', user);
        restaurantConnections[user.userId] = { socket: connection };
        connection.on('disconnect', () => {
          console.log('disconnecting restaurant user: ', connection.id);
          delete restaurantConnections[connection.user];
        });
      } else if (connection.userType === 'Customer') {
        console.log('saving customer user to socket log', user);
        customerConnections[user.userId] = { socket: connection };
        connection.on('disconnect', () => {
          console.log('disconnecting customer user: ', connection.id);
          delete customerConnections[connection.user];
        });
      }
    });
  });
};


exports.get = () => io;

exports.customerConnections = customerConnections;
exports.restaurantConnections = restaurantConnections;
