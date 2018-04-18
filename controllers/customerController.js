const { Customer, MenuItem }  = require('../database/index.js');

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

  getAllCustomers(req, res) {
    Customer.findAll({include: [{model: MenuItem}]}).then((customers) => {
      res.send(customers);
    }).catch((err) => {
      res.send(err);
    });
  },

  getSingleCustomer(req, res) {
    const { customer_id } = req.params;

    Customer.findOne({
      where: {
        id: customer_id
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
