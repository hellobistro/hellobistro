// Import dependencies
import React, { Component } from 'react';
import AuthService from '../../services/AuthService';
require('babel-polyfill');

class CustomerRegister extends Component {
  constructor(){
    super();
    this.state = {
      error: false,
      passwordMatch: true,
      validEmail: true,
      validUsername: true
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  checkFields(){
    const {password, verifypassword, email, username} = this.state
    if(password.length > 0 && password === verifypassword){
      this.setState({passwordMatch: true})
    } else {
      this.setState({passwordMatch: false})
    }
    if(this.validateEmail(email)){
      this.setState({validEmail: true})
    } else {
      this.setState({validEmail: false})
    }
    if(username){
      this.setState({validUsername: true})
    } else {
      this.setState({validUsername: false})
    }
  }

  async validFields(){
    var check = await this.checkFields.call(this);
    return this.state.username && this.state.passwordMatch && this.state.validEmail;
  }

  async registerCustomer(e) {
    e.preventDefault();
    const { username, firstname, lastname, password, verifypassword, zip, phone, email} = this.state;
    var check = await this.validFields.call(this)
    if(check){
      AuthService.customerRegister(username, firstname, lastname, password, zip, phone, email)
        .then(res => {
          this.setState({error: false});
          this.props.history.replace('/')
          console.log('successfully registered ~~', res)
        })
        .catch(err => {
          this.setState({error: true});
          console.error('error registering customer', err)
        })
    } 
  }
  
  render(){
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
          <input name="verifypassword" placeholder="Re-enter Password" type="text" onChange={this.handleChange.bind(this)}/>
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
          {
            this.state.passwordMatch === false
            ? <div>Passwords do not match </div>
            : <div></div>
          }
          {
            this.state.validEmail === false
            ? <div>Not a valid email </div>
            : <div></div>
          }
          {
            this.state.validUsername === false
            ? <div>Please provide a username </div>
            : <div></div>
          }
      </div>
    )
  }
}

export default CustomerRegister;