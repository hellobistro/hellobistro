import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers/index';
import { saveState, loadState } from './services/LocalStorage.js';

const defaultState = {
};

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  saveState(store.getState());
});

export const history = syncHistoryWithStore(createBrowserHistory(), store);
//export const history = syncHistoryWithStore(browserHistory, store);

export default store;