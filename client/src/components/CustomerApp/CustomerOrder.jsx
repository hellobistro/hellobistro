// Import dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import OrderItem from './OrderItem';
import OrderModal from './OrderModal';


// Order component
class CustomerOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalData: null,
    };
  }

  toggleModal = (data, confirmed) => {
      // If item is being added to cart
      if (confirmed) {
        
        this.props.addToCart(this.state.modalData)
      } 
      // check if item is already in cart
      if (data !== null && this.props.state.customer.cart[data.id]) {
        data = this.props.state.customer.cart[data.id]
      }

      // make sure item has quantity attribute
      if (data !== null && !data.quantity) {
        data.quantity = 1;
      }

      // Turn modal on by loading food data. Turn modal off by loading 'null'
      this.setState({
        modalData: data,
      })
  }

  handleModalChange = (key, value) => {
    const modalData = Object.assign(this.state.modalData);
    modalData[key] = value;
    this.setState({modalData});
  }

  cancelOrder = () => {
    this.props.clearCart();
    this.props.setRestaurant('undefined');
  }



  render() {
    const { cart } = this.props.state.customer;
    const items = Object.values(cart);

    // If cart is empty:
    if (items.length === 0) {
      return (
        <div className="order">
          <h4>Your Cart:</h4>
          <p>Your cart is currently empty.</p>
        </div>
      );
    }

    // If cart has items in it: 
    const billTotal = items.reduce((a, b) =>
    a + (b.price * b.quantity), 0)
    console.log(billTotal, 'BILL TOTAL')

    const orderItems = items.map(item => <OrderItem key={item.id} data={item} toggle={this.toggleModal}/>);

    return (
      <div className="Order DebugComponentRed">
        <h4>Your Cart:</h4>
        {orderItems}
        <p><strong>Bill total:</strong> ${billTotal.toFixed(2)}</p>
        <Link to='/customer/home/confirm-order/'><button>Place order</button></Link><button onClick={this.cancelOrder}>Cancel order</button>
        <OrderModal data={this.state.modalData} toggle={this.toggleModal} edit={this.handleModalChange}/>
      </div>
    );
  }
};

export default CustomerOrder;
