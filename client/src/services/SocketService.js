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
  setUser: (userInfo) => {
    console.log('set user was called', userInfo);
    socket.emit('user', userInfo);
  },
  refreshUser: () => {
    if (AuthService.loggedIn) {
      AuthService.decodeToken().then((res) => {
        console.log('refreshing user', res.id, res.userType);
        socket.emit('user', { userId: res.id, userType: res.userType });
      });
    }
  },
  clearUser: () => {
    console.log('clearing socket');
    socket.disconnect();
    socket.connect();
  },
};
// socket event listeners
socket.on('connect', () => {
  console.log('socket connected');
  SocketService.refreshUser();
});
socket.on('disconnect', () => {
  console.log('socket disconnected');
  socket.connect();
});
socket.on('notification', (data) => {
  store.dispatch(addNotification(data));
  AuthService.decodeToken().then((token) => {
    ApiService.retrieveOrders(token.userId)
      .then((res) => {
        console.log('refreshing page?', res);
        store.dispatch(loadOrders(res));
      });
  });
});

export default SocketService;
