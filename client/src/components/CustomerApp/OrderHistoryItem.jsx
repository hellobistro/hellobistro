import React from 'react';
import OrderHistoryIndividualItem from './OrderHistoryIndividualItem';

import {emojify} from 'react-emojione';

export default class OrderHistoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDrool: false
    };
  }
  
  handleMouseOver() {
    this.setState({
      showDrool: true
    });
  }

  handleMouseLeave() {
    this.setState({
      showDrool: false
    });
  }

  renderDrool() {
    const drool = emojify('🤤');

    return this.state.showDrool ? drool : <div></div>;
  }

  renderItem(name) {
    return (
      <div 
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >{name} {renderDrool()}</div>
    );

  }

  render() {
    const {data} = this.props;

    return(
    <div className="order-history-item">
      <p><strong>Order at {data.Restaurant.name}</strong></p>
      <p><strong>Status:</strong> {data.status}</p>
      <p><strong>Estimated wait:</strong> {data.prepTime}</p>
      <p><strong>Price paid:</strong> ${data.total.toFixed(2)}</p>
      <p><strong>Items ordered:</strong></p>
      {
        data.MenuItems.map((item) => {
          console.log('adsfasdfasdfasdfsadfsad', item);
          return (<OrderHistoryIndividualItem { ...item } />);
        })
      }
      </div>
    );
  }
}

