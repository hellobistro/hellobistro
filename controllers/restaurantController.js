const {
  Customer, Restaurant, RestaurantUser, MenuSection, MenuItem, Order, OrderItem 
 } = require('../database/index.js');
 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const restaurantController = {

 async createRestaurant(req, res) {
   let newRestaurant = null;

   const {
     name,
     addressOne,
     addressTwo,
     addressCity,
     addressState,
     addressZip,
     email,
     phone,
     description,
     genre,
     type,
     paymentId,
     password,
   } = req.body;

   console.log(req.body, 'cats');

   const possibleUser = await RestaurantUser.findOne({ where: { email }});

   if (possibleUser) {
     res.status(400);
     res.send('email already exists');
   }

   const hashedPassword = await bcrypt.hash(password, 10);

   Restaurant.create({
     name,
     addressOne,
     addressTwo,
     city: addressCity,
     state: addressState,
     zip: addressZip,
     email,
     phone,
     description,
     genre,
     type,
     paymentId,
   }).then((restaurant) => {
     newRestaurant = restaurant;

     return RestaurantUser.create({
       RestaurantId: restaurant.id,
       email,
       password: hashedPassword,
       phone,
     });
   }).then((user) => {
     res.status(201).json({
       user: user.id,
       restaurant: newRestaurant,
     });
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
     }, {
       model: Customer,
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

 createNewOrder(req, res) {
   const { restaurant_id } = req.params;
   const { status,
           total,
           completedAt,
           transactionId,
           table } = req.body;

   Order.create({
     status,
     total,
     completedAt,
     transactionId,
     table,
     RestaurantId: restaurant_id
   }).then((order) => {
     res.json(order);
   }).catch((err) => {
     res.send(err);
   })
 },

 createMenuSection(req, res){
   const { restaurant_id } = req.params;
   const { name,
           description,
   } = req.body;
   MenuSection.create({
     name,
     description,
     RestaurantId: restaurant_id
   }).then((item) => {
    res.json(item);
  }).catch((err) => {
    res.send(err);
  });

 },

 async createMenuItem(req, res) {
   const { restaurant_id } = req.params;
   const { name,
           price,
           vegan,
           vegetarian,
           glutenFree,
           spicy,
           image,
           prepTime,
           rating,
           menuSectionId } = req.body;

   MenuItem.create({
     name,
     price,
     vegan,
     vegetarian,
     glutenFree,
     spicy,
     image,
     prepTime,
     rating,
     MenuSectionId: menuSectionId,
     RestaurantId: restaurant_id
   }).then((item) => {
     res.json(item);
   }).catch((err) => {
     res.send(err);
   });
 },

 updateMenuItem(req, res) {
   const { restaurant_id, item_id } = req.params;
   const { name,
           price,
           vegan,
           vegetarian,
           glutenFree,
           spicy,
           image,
           prepTime,
           rating } = req.body;

   MenuItem.update({
     name,
     price,
     vegan,
     vegetarian,
     glutenFree,
     spicy,
     image,
     prepTime,
     rating
   }, {
     where: {
       id: item_id,
       RestaurantId: restaurant_id
     }
   }).then((item) => {
     res.json(item);
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

 updateRestaurant(req, res) {
   const { restaurant_id } = req.params;
   const {
     name,
     email,
     phone,
     addressOne,
     addressTwo,
     city,
     state,
     zip,
     description,
     genre,
     type,
     paymentId,
   } = req.body;


   Restaurant.update({
     name,
     email,
     phone,
     addressOne,
     addressTwo,
     city,
     state,
     zip,
     description,
     genre,
     type,
     paymentId,
   }, {
     where: {
       id: restaurant_id,
     },
   }).then((restaurant) => {
     res.json(restaurant);
   }).catch((err) => {
     console.log(err);
     res.send(err);
   });
 },

 async loginRestaurant(req, res) {
   const { email, password } = req.body;
   const user = await RestaurantUser.findOne({ where: { email } });
   const restaurantInfo = await Restaurant.findOne({where: {id: user.RestaurantId} })
   if (!user) {
     res.sendStatus(400);
   }

   const authorized = await bcrypt.compare(password, user.password);
   if (!authorized) {
     res.sendStatus(400);
   }

   const token = jwt.sign({ userType: 'Restaurant' }, 'secret', { expiresIn: 129600 });
   const info = { token, userId: user.id, userName: user.userName, restaurantInfo };
   res.json(info);
 },

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
     res.send(err);
   });
 },

 deleteAllMenuSectionsAndItems(req, res) {
   const { restaurant_id } = req.params;

   MenuItem.destroy({
     where: { RestaurantId: restaurant_id }
   }).then(() => {
     MenuSection.destroy({
       where: { RestaurantId: restaurant_id }
     }).then(() => {
       res.sendStatus(200);
     })
   }).catch((err) => {
     res.send(err);
   })
 },



 deleteOrder(req, res) {
   const { restaurant_id, order_id } = req.params;

   Order.destroy({
     where: {
       id: order_id,
       RestaurantId: restaurant_id
     }
   }).then((deleted) => {
     if (deleted < 1) {
       res.sendStatus(400);
     } else {
       res.sendStatus(200);
     }
   }).catch((err) => {
     res.send(err);
   })
 }

};

module.exports = restaurantController;