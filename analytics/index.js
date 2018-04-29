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

let orders = null;

const analyticsData = {
  customers: null,
  revenue: null,
  orders: null,
};

const analytics = {

  async buildAndSendData(req, res) {
    const { restaurant_id } = req.params;

    orders = await Order.findAll({
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
    });

    analyticsData.customers = await analytics.build.buildCustomerData();
    analyticsData.revenue = await analytics.build.buildRevenueData();
    analyticsData.orders = orders.length;

    res.json(analyticsData);
  },

  build: {

    async buildCustomerData() {
        const customerData = {
          total: 0,
          customers: {},
        };

        await asyncForEach(orders, (order) => {
          const currentCustomer = order.Customer.userName;
          if (!customerData.customers[currentCustomer]) {
            customerData.customers[currentCustomer] = 1;
          } else {
            customerData.customers[currentCustomer]++;
          }
    
          customerData.total++;
        });

        return customerData;
    },

    async buildRevenueData(req, res) {
      const revenueData = {
        total: 0.00,
      };
  
      await asyncForEach(orders, (order) => {
        const currentTotal = order.total;
        revenueData.total += currentTotal;
      });
  
      return revenueData;
    },
  },

};

module.exports = analytics;
