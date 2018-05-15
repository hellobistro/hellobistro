import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import CardSection from './CardSection';
import ApiService from '../../services/ApiService';

class AddPayment extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();
    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken().then(({token}) => {
      console.log('Received Stripe token:', token, typeof token);
      console.log('token.id', token.id)
      console.log('props.userId', this.props.userId)
      ApiService.addPaymentMethod({
        CustomerId: this.props.userId, 
        cardId: token.card.id,
        country: token.card.country,
        last4: token.card.last4,
        brand: token.card.brand,
        zip: token.card.address_zip,
        exp_month: token.card.exp_month,
        exp_year: token.card.exp_year,
      })
      .then((res) => {
        console.log('Added payment to DB', res);
      })

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