const express = require('express');
const app = express();
const db = require('./server/models/db');
const port = 3000;
require('dotenv').config();

// setup the Express middlware
require('./server/middleware/middleware')(app);

// setup the api
require('./server/api')(app);

// sync database and start server
db.sequelize.sync().then(() => {
  app.listen(port, () => {
      console.log('running server on port ' + port);
  })
});
