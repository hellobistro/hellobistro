const { Customer, MenuItem }  = require('../database/index.js');

const customerController = {

  createCustomer() {},

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
      res.send(customer);
    }).catch((err) => {
      res.send(err);
    });
  },

  updateCustomer() {},

  loginCustomer() {},

  deleteCustomer() {},

};

module.exports = customerController;
