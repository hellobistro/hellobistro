// Require controllers
const restaurantController = require('../controllers/restaurantController');
const customerController = require('../controllers/customerController');

// Create a router object
const routes = require('express').Router();

/* *********** */
/* TEST ROUTES */
/* *********** */

routes.get('/test', (req, res) => {
  res.send('The client made a successful request');
});

/* *************** */
/* CUSTOMER ROUTES */
/* *************** */

/* Authenticate */
// Login a customer
routes.post('/customers/login', (req, res) => {
  // implement
});

/* Create */

// Create a new customer
routes.post('/customers', (req, res) => {
  customerController.createCustomer(req, res);
});

// Create a new order by a customer
routes.post('/customers/:customer_id/orders', (req, res) => {
  // implement
});

// Create a new rating by a customer
routes.post('/customers/:customer_id/ratings', (req, res) => {
  // implement
});

/* Read */

// Retrieve all customers
routes.get('/customers', (req, res) => {
  customerController.getAllCustomers(req, res);
});

// Retrieve a single customer
routes.get('/customers/:customer_id', (req, res) => {
  customerController.getSingleCustomer(req, res);
});

// Retrieve all orders for a single customer
routes.get('/customers/:customer_id/orders', (req, res) => {
  // implement
});

// Retrieve all orders for all customers
routes.get('/customers/orders', (req, res) => {
  // implement
});

// Retrieve all ratings for a customer
routes.get('/customers/:customer_id/ratings', (req, res) => {
  // implement
});

// Retrieve all restaurants for a specific customer
// NOTE: Consider deprecating
routes.get('/customers/:customer_idrestaurants', (req, res) => {
  // implement
  // point to same controller for GET to restaurants
});

/* Update */

// Update a customer profile
routes.patch('/customers/:id/profile', (req, res) => {
  // implement
});

/* Destroy */

// Delete customer account
routes.delete('/customers/:customer_id', (req, res) => {
  customerController.deleteCustomer(req, res);
});

/* ***************** */
/* RESTAURANT ROUTES */
/* ***************** */

/* Authenticate */

// Login a restaurant
routes.post('/restaurants/login', (req, res) => {
  // implement
});

/* Create */
// Create a new restaurant
routes.post('/restaurants', (req, res) => {
  restaurantController.createRestaurant(req, res);
});

// Create a new menu item for a restaurant
routes.post('/restaurants/:id/menu', (req, res) => {
  // implement
});

// Create a new open order for a restaurant
routes.post('/restaurants/:restaurant_id/openorders/:order_id', (req, res) => {
  // implement
});

/* Read */

// Retrieve all restaurants
routes.get('/restaurants', (req, res) => {
  restaurantController.getAllRestaurants(req, res);
});


// Retrieve menu for a single restaurant
routes.get('/restaurants/:id/menu', (req, res) => {
  // implement
});

// Retrieve all open orders for a restaurant
routes.get('/restaurants/:restaurant_id/openorders', (req, res) => {
  // implement
});

// Retrieve a specific open order for a restaurant
routes.get('/restaurants/:restaurant_id/openorders/:order_id', (req, res) => {
  // implement
});

// Retrieve all historical orders for a restaurant
routes.get('/restaurants/:restaurant_id/orders', (req, res) => {
  restaurantController.getAllOrdersForRestaurant(req, res);
});

// Retrieve all ratings for a restaurant
routes.get('/restaurants/:restaurant_id/ratings', (req, res) => {
  // implement
});

// Retrieve a single restaurant
routes.get('/restaurants/:id', (req, res) => {
  restaurantController.getSingleRestaurant(req, res);
});

/* Update */

// Update a restaurant profile/settings
routes.patch('/restaurants/:restaurant_id', (req, res) => {
  // implement
});

// Update a menu item for a restaurant
routes.patch('/restaurants/:restaurant_id/menu/:item_id', (req, res) => {
  // implement
});

/* Destroy */

// Delete a restaurant account
routes.delete('/restaurants/:restaurant_id', (req, res) => {
  restaurantController.deleteRestaurant(req, res);
});

// Delete an open order for a restaurant
routes.delete('/restaurants/:restaurant_id/openorders/:order_id', (req, res) => {
  // implement
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
  // implement
});

/* Read */

// Retrieve all restaurants
routes.get('/api/restaurants', (req, res) => {
  // implement
});

// Retrieve information for specific restaurant
routes.get('/api/restaurants/:restaurant_id', (req, res) => {
  // implement
});

// Retrieve past orders from vendor for specific restaurant
routes.get('/api/:user_id/restaurants/:restaurant_id/orders', (req, res) => {
  // implement
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
