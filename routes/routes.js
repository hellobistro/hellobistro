// Require controllers
const restaurantController = require('../controllers/restaurantController');
const customerController = require('../controllers/customerController');

// Reqyure analytics engine
const analytics = require('../analytics');


// Create a router object
const routes = require('express').Router();

/* **************** */
/* ANALYTICS ROUTES */
/* **************** */

routes.get('/data/:restaurant_id/', (req, res) => {
  analytics.buildAndSendData(req, res);
});


/* *************** */
/* CUSTOMER ROUTES */
/* *************** */

/* Authenticate */
// Login a customer
routes.post('/customers/login', (req, res) => {
  customerController.loginCustomer(req, res);
});

/* Create */

// Create a new customer
routes.post('/customers', async (req, res) => {
  customerController.createCustomer(req, res);
});

// Create a new order by a customer
routes.post('/customers/:customer_id/orders', (req, res) => {
  customerController.createOrder(req, res);
});

// Create a new rating by a customer
routes.put('/customers/:customer_id/ratings/:menu_item_id', (req, res) => {
  customerController.incrementRating(req, res);
});

/* Read */

// Retrieve all customers
routes.get('/customers', (req, res) => {
  customerController.getAllCustomers(req, res);
});

// Retrieve all orders for a single customer
routes.get('/customers/:customer_id/orders', (req, res) => {
  customerController.getAllOrdersForCustomer(req, res);
});

// Retrieve a single customer
routes.get('/customers/:customer_id', (req, res) => {
  customerController.getSingleCustomer(req, res);
});


// Retrieve all orders for all customers
routes.get('/customers/orders', (req, res) => {
  customerController.getAllOrders(req, res);
});

// Retrieve all ratings for a customer
routes.get('/customers/:customer_id/ratings', (req, res) => {
  customerController.getRatingsForCustomer(req, res);
});

// Retrieve all restaurants for a specific customer
// NOTE: Consider deprecating
// routes.get('/customers/:customer_id/restaurants', (req, res) => {
//   // implement
//   // point to same controller for GET to restaurants
// });

/* Update */

// Update a customer profile
routes.patch('/customers/:id/profile', (req, res) => {
  customerController.updateCustomer(req, res);
});

/* Destroy */

// Delete customer account
routes.delete('/customers/:customer_id', (req, res) => {
  customerController.deleteCustomer(req, res);
});

/* ********************** */
/* RESTAURANT USER ROUTES */
/* ********************** */

// TO BE IMPLEMENTED

/* ***************** */
/* RESTAURANT ROUTES */
/* ***************** */

/* Authenticate */

//Create restaurant User
// routes.post('/restaurantUser', (req, res) => {
//   restaurantController.createRestaurantUser(req, res);
// });

// Login a restaurant
routes.post('/restaurants/login', (req, res) => {
  restaurantController.loginRestaurant(req, res);
});

/* Create */
// Create a new restaurant and user
routes.post('/restaurants', (req, res) => {
  restaurantController.createRestaurant(req, res);
});

// Create a new menu item for a restaurant
routes.post('/restaurants/menu/:restaurant_id', (req, res) => {
  restaurantController.createMenuItem(req, res);
});

// Create a new menu section for a restaurant
routes.post('/restaurants/section/:restaurant_id', (req, res) => {
  restaurantController.createMenuSection(req, res);
});

/* Read */

// Retrieve all restaurants
routes.get('/restaurants', (req, res) => {
  restaurantController.getAllRestaurants(req, res);
});

// Retrieve all open orders for a restaurant
routes.get('/restaurants/:restaurant_id/orders/open', (req, res) => {
  restaurantController.getAllOpenOrdersForRestaurant(req, res);
});

// Retrieve all historical orders for a restaurant
routes.get('/restaurants/:restaurant_id/orders', (req, res) => {
  restaurantController.getAllOrdersForRestaurant(req, res);
});

// Retrieve all ratings for a restaurant
routes.get('/restaurants/:restaurant_id/ratings', (req, res) => {
  // Consider whether needed or deprecate
  // Currently, GET to /restaurant/:id returns whole menu w/ ratings
});

// Retrieve a single restaurant
routes.get('/restaurants/:id', (req, res) => {
  restaurantController.getSingleRestaurant(req, res);
});

/* Update */

// Update a restaurant profile/settings
routes.put('/restaurants/:restaurant_id', (req, res) => {
  console.log(req.body);
  restaurantController.updateRestaurant(req, res);
});

// Update a menu item for a restaurant
routes.patch('/restaurants/:restaurant_id/menu/:item_id', (req, res) => {
  restaurantController.updateMenuItem(req, res);
});

/* Destroy */

// Delete a restaurant account
routes.delete('/restaurants/:restaurant_id', (req, res) => {
  restaurantController.deleteRestaurant(req, res);
});

// Delete an open order for a restaurant
routes.delete('/restaurants/:restaurant_id/openorders/:order_id', (req, res) => {
  restaurantController.deleteOrder(req, res);
});

// Delete all menuSections and menuItems for a restaurant
routes.delete('/restaurants/sections/items/:restaurant_id', (req, res) => {
  restaurantController.deleteAllMenuSectionsAndItems(req, res);
});

/* ********** */
/* API ROUTES */
/* ********** */

/* Authenticate */

// Login an API vendor
routes.post('/api/login', (req, res) => {
  // implement
});

/* Create */

// Create a new API user
routes.post('/api/signup', (req, res) => {
  // implement
});

// Create a new order to a restaurant
routes.post('/api/restaurants/:restaurant_id/orders', (req, res) => {
  restaurantController.createNewOrder(req, res);
});

/* Read */

// Retrieve all restaurants
routes.get('/api/restaurants', (req, res) => {
  restaurantController.getAllRestaurants(req, res);
});

// Retrieve information for specific restaurant
routes.get('/api/restaurants/:restaurant_id', (req, res) => {
  restaurantController.getSingleRestaurant(req, res);
});

// Retrieve past orders from vendor for specific restaurant
routes.get('/api/:user_id/restaurants/:restaurant_id/orders', (req, res) => {
  restaurantController.getAllOrdersForRestaurant(req, res);
});

/* Update */

// Update an API user account
routes.patch('/api/:user_id', (req, res) => {
  // implement
});

/* Destroy */

// Retrieve an API user account
routes.delete('/api/:user_id', (req, res) => {
  // implement
});

module.exports = routes;
