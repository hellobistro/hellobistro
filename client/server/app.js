// Require dependencies
const fs = require('fs');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');

https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}, app).listen(55555);

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// Note: the below console.log is intentional, and required for minimal server logging.
app.listen(port, () => {
  console.log(`Starting the server at port ${port}`);
});
