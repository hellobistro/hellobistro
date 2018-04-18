const { Customer, Restaurant, MenuSection, MenuItem, Order, OrderItem } = require('../database/index.js');

const restaurantController = {

  createRestaurant() {},

  getAllRestaurants(req, res) {
    Restaurant.findAll({}).then((restaurants) => {
      res.send(restaurants);
    }).catch((err) => {
      res.send(err);
    });
  },

  getSingleRestaurant(req, res) {
    const { id } = req.params;

    Restaurant.find({
      where: { id },
      include: [{
        model: MenuSection,
        required: false,
        include: [{
          model: MenuItem,
          required: false,
        }],
      }],
    }).then((restaurant) => {
      res.send(restaurant);
    }).catch((err) => {
      res.send(err);
    });
  },

  getAllOrdersForRestaurant(req, res) {
    const { restaurant_id } = req.params;

    Restaurant.find({
      where: { id: restaurant_id },
      include: [{
        model: Order,
        required: false,
        include: [{
          model: MenuItem,
          required: false,
        }],
        include: [{
          model: Customer,
          required: false,
        }],
      }],
    }).then((restaurant) => {
      res.send(restaurant);
    }).catch((err) => {
      res.send(err);
    });
  },

  updateRestaurant() {},

  loginRestaurant() {},

  deleteRestaurant() {},

};

module.exports = restaurantController;
