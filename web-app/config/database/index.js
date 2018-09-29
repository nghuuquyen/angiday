'use strict';

/**
* Module dependencies.
*/
const config = require('../config');
const mongoose = require('mongoose');
const logger = require('../lib/logger');

/**
* @name initDatabaseSchemas
* @description
* Do initial all database schemas.
*/
function initDatabaseSchemas() {
  logger.info('Do initial database schemas');
  require('./schemas/User');
}

// mpromise (mongoose's default promise library) is deprecated,
// Plug-in your own promise library instead.
// Use native promises or bluebird
mongoose.Promise = require('bluebird');

// Initialize Mongoose
module.exports.connect = function (cb) {
  logger.info('Trying to connect database');

  let db = mongoose.connect(config.db.uri, config.db.options, function (err) {
    // Log Error
    if (err) {
      logger.error('Could not connect to MongoDB!');
      logger.error(err);
    } else {
      // Enabling mongoose debug mode if required
      mongoose.set('debug', config.db.debug);

      // After connect database completed, do initial database schemas.
      initDatabaseSchemas();

      // Call callback FN
      if (cb) cb(db);
    }
  });
};

module.exports.disconnect = function (cb) {
  mongoose.disconnect(function (err) {
    logger.info('Disconnected from MongoDB.');
    cb(err);
  });
};
