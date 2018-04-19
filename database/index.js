const Sequelize = require('sequelize');
const {
  database,
  username,
  password,
  host,
  port,
} = require('../config/config.js');

const seed = require('../sampleData');

const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect: 'mysql',
  operatorsAliases: false,
  logging: false,
});

const Restaurant = sequelize.define('Restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  addressOne: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  addressTwo: Sequelize.STRING,
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  zip: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: Sequelize.STRING,
  genre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: Sequelize.STRING,
  paymentId: Sequelize.STRING,
});

const MenuItem = sequelize.define('MenuItem', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  vegan: Sequelize.BOOLEAN,
  vegetarian: Sequelize.BOOLEAN,
  glutenFree: Sequelize.BOOLEAN,
  spicy: Sequelize.BOOLEAN,
  image: Sequelize.STRING,
  prepTime: Sequelize.INTEGER,
  rating: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
});

const MenuSection = sequelize.define('MenuSection', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: Sequelize.STRING,
});

const Order = sequelize.define('Order', {
  status: Sequelize.STRING,
  total: Sequelize.INTEGER,
  completedAt: Sequelize.DATE,
  transactionId: Sequelize.STRING,
  table: Sequelize.STRING,
});

const OrderItem = sequelize.define('OrderItem', {
  special: Sequelize.STRING,
  price: Sequelize.INTEGER,
});

const RestaurantUser = sequelize.define('RestaurantUser', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: Sequelize.STRING,
});

const Customer = sequelize.define('Customer', {
  userName: {
    type: Sequelize.STRING,
    unique: true,
  },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  phone: Sequelize.STRING,
  availVotes: Sequelize.INTEGER,
  paymentId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  vendor: Sequelize.BOOLEAN,
  apiKey: Sequelize.STRING,
});

const CustomerRating = sequelize.define('CustomerRating', {
  total: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
});

RestaurantUser.belongsTo(Restaurant);
Restaurant.hasMany(RestaurantUser);

MenuItem.belongsTo(Restaurant);
Restaurant.hasMany(MenuItem);

MenuItem.belongsTo(MenuSection);
MenuSection.hasMany(MenuItem);

MenuSection.belongsTo(Restaurant);
Restaurant.hasMany(MenuSection);

Order.belongsTo(Restaurant);
Restaurant.hasMany(Order);

Order.belongsTo(Customer);
Customer.hasMany(Order);

Order.belongsToMany(MenuItem, { through: 'OrderItem' });
MenuItem.belongsToMany(Order, { through: 'OrderItem' });

Customer.belongsToMany(MenuItem, { through: 'CustomerRating' });
MenuItem.belongsToMany(Customer, { through: 'CustomerRating' });


/// USE THIS TO SEED DB ///////

// sequelize.sync({ force: true, logging: console.log }).then(async () => {
//   await Restaurant.bulkCreate(seed.sampleRestaurants);
//   await RestaurantUser.bulkCreate(seed.sampleRestaurantUsers);
//   await MenuSection.bulkCreate(seed.sampleMenuSections);
//   await MenuItem.bulkCreate(seed.sampleMenuItems);
//   await Customer.bulkCreate(seed.sampleCustomers);
//   await Order.bulkCreate(seed.sampleOrders);
//   await OrderItem.bulkCreate(seed.sampleOrderItems);
//   await CustomerRating.bulkCreate(seed.sampleCustomerRating);
// })
// .catch((error) => {
//   console.log("error in sequelize sync:", error);
// });

/////////////////////////////

module.exports = {
  Restaurant,
  RestaurantUser,
  MenuItem,
  MenuSection,
  Order,
  OrderItem,
  Customer,
  CustomerRating,
};
