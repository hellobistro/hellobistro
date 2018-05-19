import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import CardSection from './CardSection';
import ApiService from '../../services/ApiService';

export class AddPayment extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();
    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken().then((response) => {
      if (response.error) {
        console.log('Stripe error', response)
      } else {
        console.log('Received Stripe token:', response);
        console.log('props.userId', this.props.userId)
        const stripeId = this.props.stripeId;
        ApiService.addPaymentMethod({
          StripeId: this.props.stripeId,
          CustomerId: this.props.userId, 
          token: response,
        })
        .then((res) => {
          ApiService.retrievePaymentMethods(this.props.userId)
          .then((response) => {
            this.props.update(response);
          })
        })
      }  
    });
  }

  render() {
    return (
        <form className="AddPayment" onSubmit={this.handleSubmit}>
        <h3>Add a new payment method:</h3>
          <div className="add-payment">
            <CardSection />
          </div>
          <button className="add-button"><i className="material-icons">add_box</i>Save card.</button>
        </form>
    );
  }
}

export default injectStripe(AddPayment);