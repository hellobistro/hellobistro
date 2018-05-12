// Import dependencies
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import individual reducers
import customer from './customer';
import restaurant from './restaurant';
import user from './user';
import modals from './modals';

// Create a Root Reducer
const rootReducer = combineReducers({
  modals, customer, restaurant, user, routing: routerReducer,
});

export default rootReducer;
