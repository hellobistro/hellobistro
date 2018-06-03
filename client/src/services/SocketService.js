import { dispatch } from 'redux';
import openSocket from 'socket.io-client';
import { addNotification, loadOrders, addOpenOrders, refreshOpenOrders } from '../actions/actionCreators';
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

// Socket service methods
const SocketService = {
  setUser: (userInfo) => socket.emit('user', userInfo),

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

  refreshOpenRestaurantOrders: (restaurantId) => {
    console.log('socket refresh orders request');
    socket.emit('refreshOpenOrders', restaurantId);
  },

  closeOrder: (orderId, customerId, restaurantId) => socket.emit('closeOrder', orderId, customerId, restaurantId),

  submitOrder: order => new Promise((resolve, reject) => {
    socket.emit('submitOrder', order, (res, err) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  }),
};

// Socket service event listeners
socket.on('connect', () => {
  console.log('socket connected');
  SocketService.refreshUser();
});
socket.on('disconnect', () => {
  console.log('socket disconnected');
  socket.connect();
});
socket.on('foodReady', (data) => {
  console.log('setting notification');
  store.dispatch(addNotification(data));
  AuthService.decodeToken().then((token) => {
    ApiService.retrieveOrders(token.userId)
      .then((res) => {
        console.log('loading orders to store', res);
        store.dispatch(loadOrders(res));
      });
  });
});
socket.on('refreshOpenOrders', (data) => {
  console.log('refreshing open orders', data);
  store.dispatch(refreshOpenOrders(data));
});

export default SocketService;
