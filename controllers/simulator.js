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
  data.users = await Customer.findAll({}).map(user => user.get({ plain: true }));
  console.log(data.users.length, ' users loaded.');
};

const getRestaurants = async () => {
  data.restaurants = await Restaurant.findAll({ include: [{ model: MenuItem }] }).map(biz => biz.get({ plain: true }));
  // filter out restaurants that don't have menu items.
  data.restaurants = data.restaurants.filter(biz => (biz.MenuItems ? biz.MenuItems.length > 0 : 1 + 1 === 3));
  console.log(data.restaurants, ' restaurants loaded.');
};

const getRandomUserId = () => {
  const min = 1;
  const max = data.users.length + 2;
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomRestaurantId = () => {
  const min = 0;
  const max = data.restaurants.length;
  const i = Math.floor(Math.random() * (max - min)) + min;
  return data.restaurants[i].id;
};

const getRandomQuantity = () => {
  const min = 1;
  const max = 5;
  return Math.floor(Math.random() * (max - min)) + min;
};

// const getRandomMenu = (limit) => {
//   const id = getRandomRestaurantId();
//   console.log('Random restaurant id: ', id);
//   const restaurantMenu = data.restaurants.find(restaurant => restaurant.id === id).MenuItems;
//   console.log('Potential menu', restaurantMenu);
//   if (limit === 0) {
//     return 'Not found';
//   }

//   if (restaurantMenu.length === 0) {
//     return getRandomMenu(limit - 1);
//   }
//   console.log('returning menu', restaurantMenu);
//   return restaurantMenu;
// };

const generateOrder = (restaurantId, customerId, itemQuantity) => {
  const restaurant = restaurantId || getRandomRestaurantId();
  const customer = customerId || getRandomUserId();
  const quantity = itemQuantity || getRandomQuantity();
  const menu = data.restaurants.find(biz => biz.id === restaurant).MenuItems;
  const order = [];
  const min = 0;
  const max = menu.length - 1;
  // randomly select 'i' quantity of food items at index of 'j'
  for (let i = 1; i <= quantity; i += 1) {
    const j = Math.floor(Math.random() * (max - min)) + min;
    order.push(menu[j]);
  }
  console.log('Random order: ', order);
  return order;
};


const startSimulation = async () => {
  await getUsers();
  await getRestaurants();
  await generateOrder();
  await generateOrder();
  await generateOrder();
};

startSimulation();
