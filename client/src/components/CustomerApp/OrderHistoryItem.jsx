import React from 'react';
import moment from 'moment';

class OrderHistoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentWait: "null", delay: false, expand: false, };
  }

  renderItems = list => {
    return list.map(item => <p key={item.id}>{item.name}</p>);
  }

  renderWait = order => {
    const orderPrep = order.MenuItems.reduce((a, b) => a.prepTime + b.prepTime, { prepTime: 0 });
    const currentWait = moment(order.createdAt).add(orderPrep || 0, 'minutes').diff(moment(), 'minutes')
    if (order.status === 'completed') {
      this.setState({ delay: false, currentWait: 'Order is ready.' })
    } else {
      if (currentWait > 0 ) {
        this.setState({ delay: false, currentWait: 'Your estimated wait is ' + currentWait + '\u00A0minute(s).' })
      } else {
        this.setState({ delay: true, currentWait: 'Your order is delayed. Check with staff.'})
      }
    }
  }

  clickHandler = () => {
    this.setState({ expand: !this.state.expand, })
  }

  componentDidMount() {
    this.renderWait(this.props.data);
  }

  render() {
    let expanded = this.state.expand ? <tr className="order-history-expand"><td /><td colSpan="2"><strong>Order {this.props.data.id} includes: </strong>{this.renderItems(this.props.data.MenuItems)}</td><td /></tr> : null;
    return (
      <tbody>
        <tr onClick={this.clickHandler}>
          <td>{this.state.delay ? <div><i className="material-icons order-delay">error</i>{this.state.currentWait}</div> : this.state.currentWait}</td>
          <td>{this.props.data.id}</td>
          <td>{this.props.data.Restaurant.name}</td>
          <td>${this.props.data.total}</td>
        </tr>
        {expanded}
      </tbody>
    )
  }
};

export default OrderHistoryItem;
