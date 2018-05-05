const {
 Customer, CustomerRating, MenuItem, Order, OrderItem, Restaurant,
} = require('../database/index.js');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const customerController = {

  async createCustomer (req, res) {
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

    const user = await Customer.findOne({ where: { email }});
    if(user) {
      res.status(400);
      res.send('email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    Customer.create({
      userName,
      firstName,
      lastName,
      password: hashedPassword,
      zip,
      phone,
      email,
      availVotes: 5,
      //paymenId can't be null?
      paymentId: 1,
      vendor,
      apiKey,
    }).then((customer) => {
      var user = customer;
      console.log('the newly created user>>>>>', user)
      res.status(201).json(customer);
    }).catch((err) => {
      console.log('error created customerUser', err);
      res.send(err);
    });
  },

  createOrder(req, res) {
    const {
      status,
      total,
      transactionId,
      table,
      CustomerId,
      RestaurantId,
      items,
    } = req.body;

    console.log('Order placed by', CustomerId, 'items: ', items);

    Order.create({
      status,
      total,
      transactionId,
      table,
      CustomerId,
      RestaurantId,
    }).then(async (order) => {
      let newOrder = null;
      async function buildOrderItems() {
        items.forEach((item) => {
          order.addMenuItem(item.id, { through: { special: item.special, price: item.price } });
        });
        newOrder = Order.findById(order.id, {
          include: [MenuItem],
          required: false,
        });
      }

      await buildOrderItems();
      console.log('new order built and stored', newOrder);

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
    console.log('Customer Id for order request', customer_id);

    Order.findAll({
      where: {
        CustomerId: customer_id,
      },
      include: [{
        model: Restaurant,
        attributes: ['name'],
      },
      {
        model: MenuItem,
        required: false,
      }],
    }).then((orders) => {
      console.log('Orders coming')
      res.json(orders);
    }).catch((err) => {
      console.log('Orders error')
      res.send(err);
    });
  },

  getAllOrdersForCustomers(req, res) {
    Order.findAll()
      .then((orders) => {
        res.json(orders);
      }).catch((err) => {
        res.send(err);
      });
  },

  getRatingsForCustomer(req, res) {
    let { customer_id } = req.params;

    CustomerRating.findAll({
      where: {
        CustomerId: customer_id
      }
    }).then((ratings) => {
      res.json(ratings);
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

  async loginCustomer(req, res) {
    const { email, password } = req.body;
    const user = await Customer.findOne({ where: { email } });
    if (!user) {
      res.sendStatus(400);
    }

    const authorized = await bcrypt.compare(password, user.password);
    if (!authorized) {
      res.sendStatus(400);
    }

    const token = jwt.sign({ id: user.id, userType: 'Customer' }, 'secret', { expiresIn: 129600 });
    const info = { token, userId: user.id, userName: user.userName, firstName: user.firstName, lastName: user.lastName, email: user.email, phone: user.phone, votes: user.availVotes, paymentId: user.paymentId };
    res.json(info);
  },

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

  async updateCustomerProfile(req, res) {
    const { customer_id } = req.params;
    const  { userName, firstName, lastName, password, email, originalEmail, phone } = req.body
    if(originalEmail !== email){
      const existingEmail = await Customer.findOne({ where: { email } })
      if (existingEmail) {
        res.sendStatus(400);
      }
    }
    if(password){
      const hashedPassword = await bcrypt.hash(password, 10);
      await Customer.update({ password: hashedPassword }, {where: { id: customer_id }})
    }
    Customer.update({
      userName,
      firstName,
      lastName,
      email,
      phone
    }, {where: { id: customer_id }})
      .then((updatedUser) => {
        console.log('the udpatedUser', updatedUser)
        res.json(updatedUser)
      })
    
  }
};

module.exports = customerController;
