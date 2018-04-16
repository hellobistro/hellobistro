const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// Require database connection
const db = require('../database/index');
// Require routes
const routes = require('../routes/routes');

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
app.listen(port, () => {
  console.log(`Starting the server at port ${port}`);
});

module.exports = app;
