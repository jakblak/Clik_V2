const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const passport = require('passport');

// setup global middleware here
module.exports = (app) => {
  app.use(cors());
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(require('express-session')({ secret: 'seZ*986', resave: true, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());
};
