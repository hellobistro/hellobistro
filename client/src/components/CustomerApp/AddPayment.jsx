import React from 'react';
import {injectStripe} from 'react-stripe-elements';

import CardSection from './CardSection';

class AddPayment extends React.Component {
  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();
    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({name: 'Jenny Rosen'}).then(({token}) => {
      console.log('Received Stripe token:', token);
    });
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <h3>Add a new payment method:</h3>
          <div className="add-payment">
            <CardSection />
          </div>
          <button className="add-button"><i class="material-icons">add_box</i>Save card.</button>
        </form>
    );
  }
}

export default injectStripe(AddPayment);