const { Restaurant } = require('../database/index.js');

const restaurantController = {

  createRestaurant() {},

  getAllRestaurants(req, res) {
    Restaurant.findAll({}).then((restaurants) => {
      res.send(restaurants);
    }).catch((err) => {
      res.send(err);
    });
  },

  getSingleRestaurant() {},

  updateRestaurant() {},

  loginRestaurant() {},

  deleteRestaurant() {},

};

module.exports = restaurantController;
