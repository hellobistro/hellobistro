const {
 Customer, CustomerRating, MenuItem, Order, OrderItem 
} = require('../database/index.js');

const customerController = {

  createCustomer(req, res) {
    const {
      userName,
      firstName,
      lastName,
      password,
      zip,
      phone,
      email,
      availVotes,
      paymentId,
      vendor,
      apiKey,
    } = req.body;

    Customer.create({
      userName,
      firstName,
      lastName,
      password,
      zip,
      phone,
      email,
      availVotes,
      paymentId,
      vendor,
      apiKey,
    }).then((customer) => {
      res.status(201).json(customer);
    }).catch((err) => {
      console.log(err);
      res.send(err);
    });
  },

  createOrder(req, res) {
    console.log(req.body);
    const {
      status,
      total,
      completedAt,
      transactionId,
      table,
      CustomerId,
    } = req.body;

    Order.create({
      status,
      total,
      completedAt,
      transactionId,
      table,
      CustomerId,
    }).then((order) => {
      console.log(order);
      res.json(order);
    }).catch((err) => {
      res.send(err);
      console.log(err);
    });
  },

  incrementRating(req, res) {
    const { customer_id, menu_item_id } = req.params;

    CustomerRating.findOrCreate({
      where: {
        'CustomerId': customer_id,
        'MenuItemId': menu_item_id,
      },
    }).spread((rating, created) => {
      return rating.increment('total');
    }).then((rating) => {
      res.json(rating);
    }).catch((err) => {
      res.send(err);
    });
  },

  getAllCustomers(req, res) {
    Customer.findAll({ include: [{ model: MenuItem }] }).then((customers) => {
      res.send(customers);
    }).catch((err) => {
      res.send(err);
    });
  },

  getSingleCustomer(req, res) {
    const { customer_id } = req.params;

    Customer.findOne({
      where: {
        id: customer_id,
      },
      include: [{
        model: MenuItem,
        required: false,
      }],
    }).then((customer) => {
      if (customer === null) {
        res.sendStatus(400);
      } else {
        res.status(200).json(customer);
      }
    }).catch((err) => {
      res.send(err);
    });
  },

  getAllOrdersForCustomer(req, res) {
    const { customer_id } = req.params;

    Order.findAll({
      where: {
        CustomerId: customer_id,
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

  updateCustomer() {},

  loginCustomer() {},

  deleteCustomer(req, res) {
    const { customer_id } = req.params;

    Customer.destroy({
      where: { id: customer_id },
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

module.exports = customerController;
