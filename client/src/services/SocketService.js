import { dispatch } from 'redux';
import openSocket from 'socket.io-client';
import { addNotification } from '../actions/actionCreators';
import store from '../store';
import AuthService from './AuthService';
// create socket connection
const socket = openSocket.connect('http://localhost:3000', {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: Infinity,
});
// methods available to socket
const SocketService = {
  store: null,
  setCustomer: (token, userId) => {
    SocketService.store = { token, userId };
    socket.emit('user', SocketService.store);
  },
  refreshCustomer: () => {
    if (AuthService.loggedIn) {
      AuthService.getIdFromToken().then((userId) => {
        socket.emit('user', userId);
      });
    }
  },
  clearCustomer: () => {
    socket.disconnect();
    socket.connect();
  },
};
// socket event listeners
socket.on('connect', () => {
  console.log('socket connected');
  SocketService.refreshCustomer();
});
socket.on('disconnect', () => {
  console.log('socket disconnected');
  socket.connect();
});
socket.on('notification', (data) => {
  store.dispatch(addNotification(data));
});

export default SocketService;
