const { Customer }  = require('../database/index.js');

const customerController = {

  createCustomer() {},

  getAllCustomers(req, res) {
    Customer.findAll({}).then((customers) => {
      res.send(customers);
    }).catch((err) => {
      res.send(err);
    });
  },

  getSingleCustomer() {},

  updateCustomer() {},

  loginCustomer() {},

  deleteCustomer() {},

};

module.exports = customerController;
