"use strict";
/**
* Module dependencies.
*/
const config = require('../config');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const helmet = require('helmet');
const compress = require('compression');

/**
* @name initCoreMiddleware
* @description
* Setup some core middleware if very important for application.
*
* @param  {object} app express instance
* @param  {object} db  mongoose instance
*/
function initCoreMiddleware(app, db) {
  /**
  * @name compress assets middleware
  * @description
  * For compress assets file. Need for improve page load speed.
  * Should be placed before express.static.
  */
  app.use(compress({
    filter: function (req, res) {
      return true;
    },
    level: 9,
    memLevel : 9 // Memory allow to compress, 9 is maximum.
  }));

  /**
  * @name favicon middleware
  * @description
  * Show favicon on browser tab.
  * @TODO: Setup favicon when we have icon.
  */
  // app.use(favicon(config.favicon));

  /**
  * @name favicon middleware
  * @description
  * Request body parsing middleware should be above methodOverride
  * @TODO: Setup favicon when we have icon.
  */
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // Setup bodyParser for Passing row data to json.
  app.use(bodyParser.json());
}

/**
* @name initHelmetHeaders
* @description
* Setup helmet for security headers, it needed for application.
*
* @param  {object} app express instance
* @param  {object} db  mongoose instance
*/
function initHelmetHeaders(app, db) {
  // Use helmet to secure Express headers
  var SIX_MONTHS = 15778476000;
  app.use(helmet.frameguard());
  app.use(helmet.xssFilter());
  app.use(helmet.noSniff());
  app.use(helmet.ieNoOpen());
  app.use(helmet.dnsPrefetchControl());
  app.use(helmet.hsts({
    maxAge: SIX_MONTHS,
    includeSubdomains: true,
    force: true
  }));

  // Please alway do it.
  app.disable('x-powered-by');
}


module.exports = function setup(app, db) {
  initCoreMiddleware(app, db);

  // For header security configs
  initHelmetHeaders(app, db);
};
