import { dispatch } from 'redux';
import openSocket from 'socket.io-client';
import { addNotification } from '../actions/actionCreators';
import store from '../store';


const socket = openSocket.connect('http://localhost:3000', {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: Infinity,
});
socket.on('connection', () => {
  console.log('socket connected');
});

const SocketService = () => {
  socket.emit('data', { token: 'test', userId: 'test' });
  socket.on('disconnect', () => {
    console.log('socket disconnected');
    socket.socket.connect();
    console.log('socket attempted reconnect.');
  });
  socket.on('notification', (data) => {
    store.dispatch(addNotification(data));
  });
};

export default SocketService;
