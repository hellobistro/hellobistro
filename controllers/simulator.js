const {
  Customer,
  CustomerRating,
  MenuItem,
  Order,
  OrderItem,
  Restaurant,
  RestaurantUser,
  MenuSection,
} = require('../database/index.js');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const data = {};

async function getUsers() {
  data.users = await Customer.findAll({})
  console.log(data.users[1].dataValues);
}

async function getRestaurants() {
  data.restaurants = await Restaurant.findAll({})
  console.log(data.restaurants[0].dataValues)
}

getUsers();
getRestaurants();
