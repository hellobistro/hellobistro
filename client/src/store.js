import { createStore, compose} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { createBrowserHistory } from 'history';

import rootReducer from './reducers/index'



const defaultState = {
  
}


const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(createBrowserHistory(), store);
//export const history = syncHistoryWithStore(browserHistory, store);

export default store;