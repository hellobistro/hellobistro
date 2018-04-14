// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
// Import CustomerApp component and subcomponents
import CustomerApp from './CustomerApp/CustomerApp';

// Import RestaurantApp component and subcomponents
import RestaurantApp from './RestaurantApp/RestaurantApp';

// Create parent application
class App extends React.Component {
    constructor(props) {
      console.log(props)
      super(props);
      this.state = {
        testAsCustomer: true,
        testAsRestaurant: true,
      };
    }
  
    toggleTestAsCustomer() {
      this.setState({
        testAsCustomer: !this.state.testAsCustomer,
      });
    }
  
    toggleTestAsRestaurant() {
      this.setState({
        testAsRestaurant: !this.state.testAsRestaurant,
      });
    }
  
    render() {
      return (
        <div>
          <h1>Welcome to HelloBistro</h1>
  
          <h2>The below buttons are for testing only</h2>
          <button onClick={() => { this.toggleTestAsCustomer(); }}>
            Show customer components
          </button>
          <button onClick={() => { this.toggleTestAsRestaurant(); }}>
            Show restaurant components
          </button>
          <button onClick={() => { this.props.increment(); }}>
            trigger
          </button>
  
          { this.state.testAsCustomer ? <Route path="/" component={CustomerApp} /> : <div /> }
          { this.state.testAsRestaurant ? <Route path="/" component={RestaurantApp} /> : <div /> }
  
        </div>
      );
    }
  }
  
  export default App;
  