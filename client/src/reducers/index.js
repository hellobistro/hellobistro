// Import dependencies
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import individual reducers
import posts from './testReducer';
import customer from './customer';
import restaurant from './restaurant';
import user from './user';

// Create a Root Reducer
const rootReducer = combineReducers({posts, customer, restaurant, user, routing: routerReducer});

export default rootReducer;
