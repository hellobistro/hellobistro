import { dispatch } from 'redux';
import openSocket from 'socket.io-client';
import { addNotification, loadOrders } from '../actions/actionCreators';
import store from '../store';
import AuthService from './AuthService';
import ApiService from './ApiService';
// create socket connection
const socket = openSocket.connect('http://localhost:3000', {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: Infinity,
});
// methods available to socket
const SocketService = {
  setCustomer: (userId) => {
    socket.emit('user', userId);
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
  AuthService.getIdFromToken().then((userId) => {
    ApiService.retrieveOrders(userId)
      .then((res) => {
        console.log('refreshing page?', res);
        store.dispatch(loadOrders(res));
      });
  });
});

export default SocketService;
