// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
// // Import CustomerApp component and subcomponents
// import CustomerApp from './components/CustomerApp/CustomerApp';

// // Import RestaurantApp component and subcomponents
// import RestaurantApp from './components/RestaurantApp/RestaurantApp';

// Import master CSS
// (For per-component CSS, css files are imported by component)
import './styles/master.css';
import store, { history } from './store';
import { Provider } from 'react-redux';
import TestContainer from './components/TestContainer';



// Note: Ignoring ESLint suggestions for below React conventions.
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <TestContainer />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

