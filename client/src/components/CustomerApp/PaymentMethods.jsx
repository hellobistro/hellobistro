// import dependencies
import React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
// import child components
import InjectedAddPayment from './AddPayment';

import '../../styles/CustomerPayments.css';


const PaymentMethods = () => {
  return (
    <div className="payment-methods">
      <h2>Manage your payment methods</h2>
      <h3>We have the following cards on file:</h3>
      <div className="payment-list">
        <div className="payment-item">
        No cards on file.
        </div>
      </div>
      <StripeProvider apiKey="pk_test_lEspx1Lvu5kruar7NCjsiA4x">
        <Elements>
          <InjectedAddPayment />
        </Elements>
      </StripeProvider>
    </div>
  );
};

export default PaymentMethods;
