import React from 'react';
import moment from 'moment';

class OrderHistoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentWait: "null" };
  }

  renderItems = list => {
    return list.map(item => <li key={item.id}>{item.name}</li>);
  }

  renderWait = order => {
    const orderPrep = order.MenuItems.reduce((a, b) => a.prepTime + b.prepTime, { prepTime: 0 });
    const currentWait = moment(order.createdAt).add('minutes', orderPrep || 0).diff(moment(), 'minutes')
    if (currentWait > 0 ) {
      this.setState({ currentWait: 'Your estimated wait is ' + currentWait + '\u00A0minute(s).' })
    } else {
      this.setState({ currentWait: 'Hmmm... Your food should be ready. Check with staff.'})
    }
  }

  componentDidMount() {
    this.renderWait(this.props.data);
  }

  render() {
    return (
      <div className="order-history-item">
        <p><strong>Order at {this.props.data.Restaurant.name}</strong></p>
        <p><strong>Status:</strong> {this.state.currentWait}</p>
        <p><strong>Price paid:</strong> ${this.props.data.total.toFixed(2)}</p>
        <p><strong>Items ordered:</strong></p>
        <ul>{this.renderItems(this.props.data.MenuItems)}</ul>
      </div>
    )
  }
};

export default OrderHistoryItem;
