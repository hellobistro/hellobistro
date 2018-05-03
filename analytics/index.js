const moment = require("moment");
const {
  Customer,
  Restaurant,
  MenuSection,
  MenuItem,
  Order,
  OrderItem
} = require("../database/index.js");

let customerDirectory = {};

const analyticsData = {
  allCustomers: [],
  topTenCustomersByRevenue: [],
  topTenCustomersByOrders: [],
  totalRevenue: 0,
  totalRevenueLast30Days: 0,
  totalRevenueLast60Days: 0,
  totalRevenueByDayOfWeek: {
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0,
    Sunday: 0
  },
  totalRevenueByMonth: {
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0
  },
  openOrders: []
};

const buildTotalRevenue = order => {
  analyticsData.totalRevenue += order.total;
  return null;
};

const buildTotalRevenueLast30Days = order => {
  let now = moment(Date.now());
  let completed = moment(order.completedAt);
  let diffInDays = now.diff(completed, "days");

  if (diffInDays <= 30) {
    analyticsData.totalRevenueLast30Days += order.total;
  }

  return null;
};

const buildTotalRevenueLast60Days = order => {
  let now = moment(Date.now());
  let completed = moment(order.completedAt);
  let diffInDays = now.diff(completed, "days");

  if (diffInDays <= 60) {
    analyticsData.totalRevenueLast60Days += order.total;
  }

  return null;
};

const buildTotalRevenueByDayOfWeek = order => {
  let day = moment(order.completedAt).format("dddd");
  analyticsData.totalRevenueByDayOfWeek[day] += order.total;
};

const buildTotalRevenueByMonth = order => {
  let month = moment(order.completedAt).format("MMM");
  analyticsData.totalRevenueByMonth[month] += order.total;
};

const buildCustomerDirectory = order => {
  const currentCustomer = order.Customer.userName;

  if (!customerDirectory[currentCustomer]) {
    customerDirectory[currentCustomer] = {
      orders: 1,
      totalRevenue: order.total,
      averageRevenue: order.total,
      lastOrderDate: order.completedAt
    };
  } else {
    customerDirectory[currentCustomer].orders++;
    customerDirectory[currentCustomer].totalRevenue += order.total;
    customerDirectory[currentCustomer].averageRevenue =
      customerDirectory[currentCustomer].totalRevenue /
      customerDirectory[currentCustomer].orders;
    if (customerDirectory[currentCustomer.lastOrderDate < order.completedAt]) {
      customerDirectory[currentCustomer].lastOrderDate = order.completedAt;
    }
  }
};

const buildAllCustomers = () => {
  analyticsData.allCustomers.length = 0;
  console.log('zz', customerDirectory);
  for (var key in customerDirectory) {
    let customer = Object.assign({}, customerDirectory[key], { userName: key });
    analyticsData.allCustomers.push(customer);
  }

  analyticsData.allCustomers.sort((a, b) => {
    var nameA = a.userName.toLowerCase();
    var nameB = b.userName.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  console.log(analyticsData.allCustomers);
};

const buildTopTenCustomersByOrders = () => {
  analyticsData.topTenCustomersByOrders = analyticsData.allCustomers
    .slice()
    .sort((a, b) => {
      if (a.orders < b.orders) {
        return -1;
      }
      if (a.orders > b.orders) {
        return 1;
      }

      // names must be equal
      return 0;
    });
};

const buildTopTenCustomersByRevenue = () => {
  analyticsData.topTenCustomersByRevenue = analyticsData.allCustomers
    .slice()
    .sort((a, b) => {
      if (a.totalRevenue < b.totalRevenue) {
        return -1;
      }
      if (a.totalRevenue > b.totalRevenue) {
        return 1;
      }

      // names must be equal
      return 0;
    });
};

const analytics = {
  async buildAndSendData(req, res) {
    const { restaurant_id } = req.params;

    orders = await Order.findAll({
      where: {
        RestaurantId: restaurant_id
      },
      include: [
        {
          model: MenuItem,
          required: false
        },
        {
          model: Customer,
          required: false
        }
      ]
    });

    customerDirectory = {};

    await orders.forEach(order => {
      // If order is not completed, push it to openOrders
      if (!order.completedAt) {
        analyticsData.openOrders.push(order);
      } else {
        buildTotalRevenue(order);
        buildTotalRevenueLast30Days(order);
        buildTotalRevenueLast60Days(order);
        buildTotalRevenueByDayOfWeek(order);
        buildTotalRevenueByMonth(order);
        buildCustomerDirectory(order);
      }
    });

    buildAllCustomers();
    buildTopTenCustomersByRevenue();
    buildTopTenCustomersByOrders();

    res.json(analyticsData);
  }
};

module.exports = analytics;
