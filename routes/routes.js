// Require controllers
const restaurantController = require('../controllers/restaurantController');
const customerController = require('../controllers/customerController');

// Create a router object
const routes = require('express').Router();

// Test routes
routes.get('/test', (req, res) => {
  res.send('The client made a successful request');
});

// Customer routes
routes.get('/customers', (req, res) => {
  customerController.getAllCustomers(req, res);
});
// Restaurant routes
routes.get('/restaurants', (req, res) => {
  restaurantController.getAllRestaurants(req, res);
});

// API routes
// Forthcoming

module.exports = routes;
