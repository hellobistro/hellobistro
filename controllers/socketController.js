const sequelize = require('sequelize');
const {
  Customer,
  Restaurant,
  RestaurantUser,
  MenuSection,
  MenuItem,
  Order,
  OrderItem,
} = require('../database/index.js');

const restaurantController = {