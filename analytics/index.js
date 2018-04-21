// Require models
const {
  Customer, Restaurant, MenuSection, MenuItem, Order, OrderItem,
} = require('../database/index.js');

// workingData holds information for current restaurant
let workingData = null;

// A helper function; consider moving to a helper library file
async function asyncForEach(array, cb) {
  for (let index = 0; index < array.length; index++) {
    await cb(array[index], index);
  }
}

const analytics = {
  loadData(restaurant_id) {
    return Order.findAll({
      where: {
        RestaurantId: restaurant_id,
      },
      include: [{
        model: MenuItem,
        required: false,
      }, {
        model: Customer,
        required: false,
      }],
    }).then((orders) => {
      workingData = orders;
    }).catch((err) => {
      console.log(err);
    });
  },

  // Retrieve total number of unique customers for restaurant
  async allCustomers(req, res) {
    const customerData = {
      total: 0,
      customers: {},
    };

    await asyncForEach(workingData, (order) => {
      const currentCustomer = order.Customer.userName;
      if (!customerData.customers[currentCustomer]) {
        customerData.customers[currentCustomer] = 1;
      } else {
        customerData.customers[currentCustomer]++;
      }

      customerData.total++;
    });

    res.json(customerData);
  },

  // Retrieve total sum of order price totals for restaurant
  async totalRevenue(req, res) {
    const revenueData = {
      total: 0.00,
    };

    await asyncForEach(workingData, (order) => {
      const currentTotal = order.total;
      revenueData.total += currentTotal;
    });

    res.json(revenueData);
  },

  orderCount(req, res) {
    res.json({
      totalOrders: workingData.length,
    });
  },

};

module.exports = analytics;
