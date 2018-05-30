import { dispatch } from 'redux';
import { addNotification } from '../actions/actionCreators';
import store from '../store';


// Launch SocketService event listeners
const SocketService = (socket) => {
  console.log('Launching socket service event listeners');
  socket.on('notification', (data) => {
    store.dispatch(addNotification(data));
  });
};

export default SocketService;
