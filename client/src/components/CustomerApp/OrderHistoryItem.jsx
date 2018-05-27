import React from 'react';
import moment from 'moment';

class OrderHistoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentWait: "null", delay: false };
  }

  renderItems = list => {
    return list.map(item => <li key={item.id}>{item.name}</li>);
  }

  renderWait = order => {
    const orderPrep = order.MenuItems.reduce((a, b) => a.prepTime + b.prepTime, { prepTime: 0 });
    const currentWait = moment(order.createdAt).add('minutes', orderPrep || 0).diff(moment(), 'minutes')
    if (currentWait > 0 ) {
      this.setState({ delay: false, currentWait: 'Your estimated wait is ' + currentWait + '\u00A0minute(s).' })
    } else {
      this.setState({ delay: true, currentWait: 'Your food should be ready. Check with staff.'})
    }
  }

  componentDidMount() {
    this.renderWait(this.props.data);
  }

  render() {
    return (
      <tr>
        <td>{this.state.delay ? <div><i className="material-icons order-delay">error</i>{this.state.currentWait}</div> : this.state.currentWait}</td>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.Restaurant.name}</td>
        <td>${this.props.data.total}</td>
      </tr>
    )
  }
};

export default OrderHistoryItem;
