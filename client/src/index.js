// // Import dependencies
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {BrowserRouter, Route, Link} from 'react-router-dom';
// import Test1 from './components/Test1.js';
// import Test2 from './components/Test2.js';
// import Test3 from './components/Test3.js';
// import store, { history } from './store';
// import { Provider } from 'react-redux';
// import App from './components/App';

// // Create parent application
// class Main extends React.Component {
//   render() {
//     return (
//      <div>
//        <h1>Welcome to HelloBistro</h1>
//        <Link to="/test1">Test1</Link>
//        <Link to="/test2">Test2</Link>
//        <Route path="/test1" component={Test1}/>
//        <Route path="/test2" component={Test2}/>
//        <Route path="/test3" component={Test3}/>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter history={history}>
//       <App/>
//     </BrowserRouter>
//   </Provider>, document.getElementById('root'));

// export default Main;