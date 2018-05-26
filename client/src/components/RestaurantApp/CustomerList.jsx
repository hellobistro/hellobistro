// Import dependencies
import React from 'react';

// Import components/containers
import LoadingIndicator from '../LoadingIndicator';

// Import services/helpers
import ApiService from '../../services/ApiService';

// Import CSS
import '../../styles/CustomerList.css';

class CustomerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: null,
      sortBy: 'orders',
    };
  }

  componentWillMount() {
    const { allCustomers } = this.props.state.restaurant.analytics;

    this.setState({
      customers: allCustomers || [],
    });
  }

  renderCustomersIntoTable() {
    const customers = (this.state.customers);

    return (
      customers.map(customer => (
        <tr>
          <td>{ customer.userName }</td>
          <td>{ customer.orders }</td>
          <td>${ customer.totalRevenue.toFixed(2) }</td>
          <td>${ customer.averageRevenue.toFixed(2) }</td>
          <td>{ customer.lastOrderDateHumanReadable }</td>
        </tr>
      ))
    );
  }

  setSortCriteria(criteria) {
    if (this.state.sortBy === criteria) {
      const reversed = Array.slice(this.state.customers).reverse();
      console.log(reversed);
      this.setState({
        customers: reversed,
      });
    } else {
      this.setState({
        sortBy: criteria,
      }, () => {
        this.sortCustomers();
      });
    }
  }

  sortCustomers() {
    const customers = Array.slice(this.props.state.restaurant.analytics.allCustomers);
    const sorted = customers.sort((a, b) => {
      const sortBy = this.state.sortBy;
      const A = a[sortBy];
      const B = b[sortBy];

      if (A > B) {
        return -1;
      }
      if (A < B) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    this.setState({
      customers: sorted,
    });
  }

  renderActiveOrInactiveHeader(name, displayName) {
    const sortBy = this.state.sortBy;

    return (
      sortBy === name ?
        <span className="tr-header selected">{displayName}</span>
        :
        <span className="tr-header">{displayName}</span>
    );
  }

  renderTable() {
    return (
      <table className="table-customers" >
        <tbody>
          <tr>
            <th>User Name</th>
            <th onClick={this.setSortCriteria.bind(this, 'orders')}>
              { this.renderActiveOrInactiveHeader('orders', 'Orders')}
            </th>
            <th onClick={this.setSortCriteria.bind(this, 'totalRevenue')}>
              { this.renderActiveOrInactiveHeader('totalRevenue', 'Total Revenue')}


            </th>
            <th onClick={this.setSortCriteria.bind(this, 'averageRevenue')}>              { this.renderActiveOrInactiveHeader('averageRevenue', 'Average Revenue')}


            </th>
            <th onClick={this.setSortCriteria.bind(this, 'lastOrderDate')}>{ this.renderActiveOrInactiveHeader('lastOrderDate', 'Last Order Date')}</th>
          </tr>
          { this.renderCustomersIntoTable() }
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div className="CustomerList">
        <div className="page-header">
          <p>
            Customers of <strong>{this.props.state.restaurant.restaurantInfo.name}</strong>
          </p>
          { this.state.confirmation ? this.renderConfirmation() : <div />}
        </div>
        <div className="white-frame">
          { this.props.state.restaurant ?
        this.renderTable() :
        <LoadingIndicator type="restaurant" />}
        </div>
      </div>
    );
  }
}

export default CustomerList;
