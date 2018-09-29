"use strict";

const config = require('../config');
const express = require('express');
const path = require('path');
const NotFoundError = require('../../app/errors/NotFoundError');
const logger = require('./logger');
const _ = require('lodash');

/**
* @name initStaticContentRoutes
* @description
* Config static assets files for client can get from browser.
*
* @param  {object} app express instance
*/
function initStaticContentRoutes(app) {
  // Setting the server static folder.
  app.use('/', express.static(path.resolve('./public'), {
    maxage: config.cache.maxAge,
    setHeaders: setCustomCacheControl
  }));

  var _staticFolderRoot = './';

  // Globbing static routing for client assets.
  config.folders.client.forEach(function (staticPath) {
    // Express route need '/' at first.
    let _path = staticPath.startsWith('/') ? staticPath : '/' + staticPath;

    app.use(_path, express.static(path.resolve(_staticFolderRoot + staticPath) , {
      maxage: config.cache.maxAge,
      setHeaders: setCustomCacheControl
    }));
  });
}

/**
* @name setCustomCacheControl
* @description
* Setup Cache-Control for client browser caching content.
*
* [NOTICE] Currently i don't allow cache HTML and JSON file.
* @param {object} res  HTTP response
* @param {object} path Content path
*/
function setCustomCacheControl(res, path) {
  res.setHeader("Expires", new Date(Date.now() + config.cache.expires * 1000).toUTCString());

  // Avoid cache on development, because it really hard for debug.
  if(process.env.NODE_ENV !== 'development') {
    res.setHeader('Cache-Control', 'public, max-age=' + config.cache.maxAge + ', must-revalidate');
  }
}

/**
* @name initLocalVariables
* @description
*
* Initialize local variables for express application,
* after that we can get config value from environment on HTML view.
*
* @param  {object} app express instance
*/
function initLocalVariables(app) {
  //Setting application local variables
  app.locals.title = config.app.title;
  app.locals.name = config.app.title;
  app.locals.image = config.logo;
  app.locals.description = config.app.description;
  app.locals.tags = config.app.keywords;
  app.locals.logo = config.logo;
  app.locals.favicon = config.favicon;
  app.locals.hosts = config.hosts;

  // Client JS and CSS files for browser client load.
  app.locals.jsFiles = config.files.client.js;
  app.locals.cssFiles = config.files.client.css;

  // Deploy time will used for make sure client update all assets file cached,
  // when we deploy new version.
  app.locals.deployTime = (new Date()).getTime();

  // Passing the request url to environment locals
  app.use(function (req, res, next) {
    res.locals.host = req.protocol + '://' + req.hostname;
    res.locals.url = req.protocol + '://' + req.headers.host + req.originalUrl;
    next();
  });
}

/**
* @name initRouteErrorHandle
* @description
* Get errors and show to view page.
*
* @param  {object} app express instance
*/
function initRouteErrorHandle(app) {
  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new NotFoundError('Page not found');
    return next(err);
  });


  // Error handle
  app.use(function(err, req, res, next) {
    // Must logging error.
    logger.error(err, {
      url: req.url,
      username: _.get(req, 'user.username')
    });

    const _status = err.status || 500;
    res.status(_status);

    if(err.isPublic) {
      return res.json(err);
    }

    res.render('error', {
      user : req.user,
      message: err.message,
      status : _status
    });
  });
}

/**
* Initialize the Express application
* [NOTICE] Please keep correct order of all steps below.
*/
module.exports.init = function (db) {
  let app = express();

  // 1. Setup local variables for express.
  initLocalVariables(app);

  // 2. Setup utils and custom middlewares.
  require('./middleware')(app, db);

  // 3. Setup static content, before sessions.
  initStaticContentRoutes(app);

  // 4. Setup view engine
  require('./views')(app, db);

  // 5. Setup express and passport sessions.
  require('./session')(app, db);

  // 6. Setup passport for authentication.
  require('./passport')(app, db);

  // 7. Setup server routes, after session for binding user information.
  app.use(require('../../app/routes'));

  // 8. Config CORS headers for security.
  require('./cors')(app, db);

  // 9. Initial route errors handler.
  initRouteErrorHandle(app);

  // 10. Configure Socket.io
  app = require('./socket.io')(app, db);

  return app;
};
