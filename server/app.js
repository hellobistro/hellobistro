const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwtDecode = require('jwt-decode');
//image upload
const AWS = require('aws-sdk');
const UUID = require('uuid/v4');
const Busboy = require('busboy');
AWS.config.update({ accessKeyId: 'AKIAJCL67PZSTIZDZNDA', secretAccessKey: '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' });
const S3 = new AWS.S3();
//Bucket is "hbphotostorage" and the region is "us-west-2"

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

app.use('/restaurants', protectRoutes('Restaurant'));
app.use('/customers', protectRoutes('Customer'));
app.use('/', routes);

app.post("/upload", (req, res) => {
  console.log('the request body>>>>  ', req.body)
  let chunks = [], fname, ftype, fEncoding;
  let busboy = new Busboy({ headers: req.headers });
  busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
      fname = filename.replace(/ /g,"_");
      ftype = mimetype;
      fEncoding = encoding;
      file.on('data', function(data) {
          // you will get chunks here will pull all chunk to an array and later concat it.
          console.log (chunks.length);
          chunks.push(data)
      });
      file.on('end', function() {
          console.log('File [' + filename + '] Finished');
      });
  });
  busboy.on('finish', function() {
      const userId = UUID();
      const params = {
          Bucket: 'hbphotostorage', // your s3 bucket name
          Key: `${userId}-${fname}`, 
          Body: Buffer.concat(chunks), // concatinating all chunks
          ACL: 'public-read',
          ContentEncoding: fEncoding, // optional
          ContentType: ftype // required
      }
      // we are sending buffer data to s3.
      S3.upload(params, (err, s3res) => {
          if (err){
            res.send({err, status: 'error'});
          } else {
            res.send({data:s3res, status: 'success', msg: 'Image successfully uploaded.'});
          }
      });
      
  });
  req.pipe(busboy);
});

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
