import { createStore, compose} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import {testReducer} from './reducers/index'



const defaultState = {
  
}

//const store = createStore(rootReducer, defaultState);
const store = createStore(testReducer, defaultState);

export const history = {} //syncHistoryWithStore(browserHistory, store);

export default store;