// Import dependencies
import React, { Component } from 'react';
import AuthService from '../../services/AuthService'

class CustomerRegister extends Component {
  constructor(){
    super();
    this.Auth = new AuthService();
    this.state = {
      error: false
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  registerCustomer(e) {
    e.preventDefault();
    const { username, firstname, lastname, password, zip, phone, email} = this.state;
    this.Auth.customerRegister(username, firstname, lastname, password, zip, phone, email)
      .then(res => {
        this.setState({error: false});
        //this.props.history.replace('/')
        console.log('successfully registered ~~', res)
      })
      .catch(err => {
        this.setState({error: true});
        console.error('error registering customer', err)
      })
  }
  
  render(){
    console.log('the state in customerregister', this.state)
    return(
      <div className="CustomerRegister"> 
        <h2>Customer Registration</h2>
          <p> * fields are required </p>
          <div>Username *</div> 
          <input name="username" placeholder="Username" type="text" onChange={this.handleChange.bind(this)}/>
          <br />
          <div className="RegisterLabel">First Name</div> 
          <input name="firstname" placeholder="First Name" type="text" onChange={this.handleChange.bind(this)}/>
          <br />
          <div className="RegisterLabel">Last Name</div> 
          <input name="lastname" placeholder="Last Name" type="text" onChange={this.handleChange.bind(this)}/> 
          <br />
          <div className="RegisterLabel">Password *</div> 
          <input name="password" placeholder="Password" type="text" onChange={this.handleChange.bind(this)}/>
          <br /> 
          <div className="RegisterLabel">Re-enter Password *</div> 
          <input name="verifypassword" placeholder="Re-enter Password" type="text"/>
          <br />
          <div className="RegisterLabel">Zip Code</div> 
          <input name="zip" placeholder="Zip Code" type="text" onChange={this.handleChange.bind(this)}/>
          <br />
          <div className="RegisterLabel">Phone</div> 
          <input name="phone" placeholder="Phone" type="text" onChange={this.handleChange.bind(this)}/>
          <br />
          <div className="RegisterLabel">Email *</div> 
          <input name="email" placeholder="Email Address" onChange={this.handleChange.bind(this)}/>
          <br />
          <br />
          <button onClick={this.registerCustomer.bind(this)}>Register</button>
          {
            this.state.error
            ? <div>Email already exists </div>
            : <div></div>
          }
      </div>
    )
  }
}

export default CustomerRegister;