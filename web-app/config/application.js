'use strict';

/**
* Module dependencies.
*/

// loads environment variables from a .env file into process.env
const env = require('dotenv').config();
const config = require('./config');
let database = require('./database');
let express = require('./lib/express');
let logger 	= require('./lib/logger');

/**
* @name init
* @description
* Initial database connection.
*/
module.exports.init = function init(callback) {
  logger.info('DB Connection URI: ' + process.env.MONGO_URI);

  database.connect(function (db) {
    // Initialize express
    
    logger.info('Connect Mongo Database Done.');
    var app = express.init(db);
    if (callback) callback(app, db, config);
  });
};

/**
* @name start
* @description
* Start web application
*/
module.exports.start = function start(callback) {
  var _this = this;

  _this.init(function (app, db, config) {
    var port = config.port || 3000;

    app.listen(port , function () {
      logger.info('-------------- QChat Application ---------------');
      logger.info('App Starting On Port ' + port);
      logger.info('Environment: ' + process.env.NODE_ENV || 'production');
      logger.info('-----------------------------------');

      if (callback) callback(app, db, config);
    });
  });
};
