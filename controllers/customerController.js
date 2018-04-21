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
    const {
      status,
      total,
      completedAt,
      transaction,
      table,
      CustomerId,
      RestaurantId,
      items,
    } = req.body;

    Order.create({
      status,
      total,
      completedAt,
      transaction,
      table,
      CustomerId,
      RestaurantId,
    }).then(async (order) => {
      let newOrder = null;
      async function buildOrderItems() {
        for (let item of items) {
          await order.addMenuItem(item.id, { through: item.details });
        }
        newOrder = Order.findById(order.id, {
          include: [MenuItem],
          required: false,
        });
      };

      await buildOrderItems();
      
      return newOrder;
    }).then((order) => {
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

    MenuItem.findById(menu_item_id).then((menuItem) => {
      menuItem.increment('rating');
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

  updateCustomer(req, res) {

    const { customer_id } = req.params;
    const {
      firstName,
      lastName,
      zip,
      phone,
      email,
    } = req.body;

    Customer.update({
      firstName,
      lastName,
      zip,
      phone,
      email,
    }, {
      where: {
        id: customer_id,
      },
    }).then((customer) => {
      res.json(customer);
    }).catch((err) => {
      console.log(err);
      res.send(err);
    });
  },

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
