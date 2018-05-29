import { dispatch } from 'redux';
import { addNotification } from '../actions/actionCreators';
import store from '../store';

store.dispatch(addNotification('test'));
// Launch SocketService event listeners
const SocketService = (socket) => {
  console.log('Launching socket service event listeners');
  socket.on('notification', (data) => {
    console.log('notification recieved', data);
  });
};

export default SocketService;
