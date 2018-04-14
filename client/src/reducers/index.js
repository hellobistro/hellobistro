import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './testReducer'
//import all reducers, combine them
// const rootReducer = combineReducers({routing: routerReducer });



export const testReducer = combineReducers({posts, routing: routerReducer})

// export default rootReducer;