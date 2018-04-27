import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './testReducer';
import customer from './customer';
import restaurant from './restaurant';
//import all reducers, combine them
// const rootReducer = combineReducers({routing: routerReducer });



const rootReducer = combineReducers({posts, customer, restaurant, routing: routerReducer})

export default rootReducer;