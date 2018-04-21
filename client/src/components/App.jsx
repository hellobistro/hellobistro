// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
// Import CustomerApp component and subcomponents
import { CustomerAppContainer } from './Containers';

// Import RestaurantApp component and subcomponents
import { RestaurantAppContainer } from './Containers';

// Create parent application
class App extends React.Component {
    constructor(props) {
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
      console.log('the props~~~ in App', this.props)
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
  
          { this.state.testAsCustomer ? <Route path="/" component={CustomerAppContainer} /> : <div /> }
          { this.state.testAsRestaurant ? <Route path="/" component={RestaurantAppContainer} /> : <div /> }
  
        </div>
      );
    }
  }
  
  export default App;
  