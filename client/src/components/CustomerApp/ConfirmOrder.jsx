// Import dependencies
import React from 'react';
import ApiService from '../../services/CustomerApiService';

// ConfirmOrder component
// Confirm before a user places an order
const ConfirmOrder = (props) => {
  const { cart } = props.state.customer;
  const items = Object.values(cart);
  const billTotal = items.reduce((a, b) =>
    a + (b.price * b.quantity), 0);
  const handleSubmit = () => {
    ApiService.submitOrder()
    
    
    props.clearCart();


  }

  return (
    <div className="ConfirmOrder DebugComponentRed">
      <h3>Bill total: ${billTotal.toFixed(2)}</h3>
      <p>Choose your payment method:</p><select><option>Visa -3533</option></select>
      <button onSubmit={handleSubmit}>Place Order</button>
    </div>
  );
};

export default ConfirmOrder;
