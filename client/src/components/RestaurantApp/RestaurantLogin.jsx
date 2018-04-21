// Import dependencies
import React, { Component } from 'react';
import AuthService from '../../services/AuthService';

// CustomerLogin component
// Used by Restaurants to log into app
class RestaurantLogin extends Component  {
  constructor(){
    super();
    this.Auth = new AuthService();
    this.state = {
      error: false
    }
  }

  // componentWillMount(){
  //   if(this.Auth.loggedIn()) {
  //     //this.props.history.replace('/');
  //   }
  // }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.Auth.restaurantLogin(this.state.email, this.state.password)
      .then(() => {
        //this.props.history.replace('/')
        this.setState({error: false})
      })
      .catch( err => {
        this.setState({error: true});
        console.error('err in handlesubmit', err)
      })
  }


  render() {
    console.log('the state in restaurant login', this.state)
    return (
      <div className="RestaurantLogin DebugComponentBlue">
        <p>This is the <strong>RestaurantLogin</strong> component</p>
        <p>Fix it so it is conditionally rendered at <code>/</code></p>
        <input placeholder="Email" name="email" type="text" onChange={this.handleChange.bind(this)}/>
        <input placeholder="Password" name="password" type="password" onChange={this.handleChange.bind(this)}/>
        <button onClick={this.handleSubmit.bind(this)}>LOGIN</button>
        {
          this.state.error
          ? <div>Invalid credentials</div>
          : <div></div>
        }
      </div>
    )}
}

export default RestaurantLogin;

