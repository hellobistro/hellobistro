const { Customer, Restaurant, MenuSection, MenuItem, Order, OrderItem } = require('../database/index.js');

const restaurantController = {

  createRestaurant(req, res) {
    const {
      name,
      addressOne,
      addressTwo,
      city,
      state,
      zip,
      email,
      phone,
      description,
      genre,
      type,
      paymentId,
    } = req.body;

    Restaurant.create({
      name,
      addressOne,
      addressTwo,
      city,
      state,
      zip,
      email,
      phone,
      description,
      genre,
      type,
      paymentId,
    }).then((restaurant) => {
      res.status(201).json(restaurant);
    }).catch((err) => {
      console.log(err);
      res.send(err);
    });
  },

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
      if (restaurant === null) {
        res.sendStatus(400);
      } else {
        res.status(200).json(restaurant);
      }
    }).catch((err) => {
      console.log('err', err);
      res.send(err);
    });
  },

  getAllOrdersForRestaurant(req, res) {
    const { restaurant_id } = req.params;
    Order.findAll({
      where: {
        RestaurantId: restaurant_id,
      },
      include: [{
        model: MenuItem,
        required: false,
      }],
    }).then((orders) => {
      res.json(orders);
    }).catch((err) => {
      res.send(err);
    });
  },

  getAllOpenOrdersForRestaurant(req, res) {
    const { restaurant_id } = req.params;
    
    Order.findAll({
      where: {
        RestaurantId: restaurant_id,
        completedAt: null,
      },
      include: [{
        model: MenuItem,
        required: false,
      }],
    }).then((orders) => {
      res.json(orders);
    }).catch((err) => {
      res.send(err);
    });
  },

  getAllRatingsForRestaurant(req, res) {
    const { restaurant_id } = req.params;
    Order.findAll({
      where: {
        RestaurantId: restaurant_id,
      },
      include: [{
        model: MenuItem,
        required: false,
      }],
    }).then((orders) => {
      res.json(orders);
    }).catch((err) => {
      res.send(err);
    });
  },

  updateRestaurant() {},

  loginRestaurant() {},

  deleteRestaurant(req, res) {
    const { restaurant_id } = req.params;

    Restaurant.destroy({
      where: { id: restaurant_id },
    }).then((deleted) => {
      if (deleted < 1) {
        res.sendStatus(400);
      } else {
        res.sendStatus(200);
      }
    }).catch((err) => {
      console.log('err', err);
      res.send(err);
    });
  },

};

module.exports = restaurantController;
