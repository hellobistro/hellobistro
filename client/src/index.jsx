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
import { AppContainer } from './components/Containers';
import { ConnectedRouter } from 'react-router-redux';



// Note: Ignoring ESLint suggestions for below React conventions.
ReactDOM.render(
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}
      <BrowserRouter basename="/" history={history} >
        <AppContainer />
      </BrowserRouter>
    {/* </ConnectedRouter> */}
  </Provider>, document.getElementById('root'));

