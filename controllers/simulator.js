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

const data = {};

const getUsers = async () => {
  data.users = await Customer.findAll({});
  console.log(data.users.length);
};

const getRestaurants = async () => {
  data.restaurants = await Restaurant.findAll({ include: [{ model: MenuItem }] });
  console.log(data.restaurants.length);
};

const getRandomUserId = () => {
  const min = 0;
  const max = data.users.length + 2;
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomRestaurantId = () => {
  const min = 0;
  const max = data.restaurants.length + 2;
  return Math.floor(Math.random() * (max - min)) + min;
};

const placeRandomOrder = () => {
};

const startSimulation = async () => {
  await getUsers();
  await getRestaurants();
  await console.log('Random UserId: ', getRandomUserId());

};

startSimulation();
