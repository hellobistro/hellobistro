const express = require('express');
const socketio = require('socket.io');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const jwt = require('jsonwebtoken');
const jwtDecode = require('jwt-decode');

// Require database connection
const db = require('../database/index');
// Require routes
const routes = require('../routes/routes');
const socket = require('../routes/socket');

const app = express();

const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Simple loggin middleware
app.use('*', (req, res, next) => {
  console.log(`Server received request type ${req.method} to ${req.originalUrl}`);
  next();
});

const protectRoutes = type => function (req, res, next) {
  const tokenHeader = req.headers.authorization;

  if (tokenHeader) {
    const token = req.headers.authorization.split('Bearer ')[1];

    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) {
        console.log('Error -- attempted to access protected route with token that failed verification');
        res.status(401).send({ message: 'ERROR' });
      } else if (decoded.userType !== type) {
        console.log('user type: ', decoded.userType, 'expected: ', type);
        console.log('Error -- attempted to access protected route with wrong token userType');

        res.status(401).send({ message: 'ERROR' });
      } else {
        next();
      }
    });
  } else {
    console.log('Error -- attempted to access protected route without a token');

    res.status(401).send({ message: 'ERROR' });
  }
};

// app.use('/restaurants', protectRoutes('Restaurant'));
// app.use('/customers', protectRoutes('Customer'));
app.use('/', routes);

// app.use(express.static(path.join(__dirname, '../client/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

// Note: the below console.log is intentional, and required for minimal server logging.
const server = app.listen(port, () => {
  console.log(`Starting the server at port ${port}`);
});
const io = require('socket.io').listen(server);

socket.set(io);

module.exports = app;
