// Import dependencies
import React, { Component } from 'react';


class CustomerRegister extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
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
          <input name="password" placeholder="Password" type="text"/>
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
          <button onClick={function(){this.props.addCustomer(this.state)}.bind(this)}>Register</button>
      </div>
    )
  }
}

export default CustomerRegister;