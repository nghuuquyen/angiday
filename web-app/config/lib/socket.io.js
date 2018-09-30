'use strict';

// Load the module dependencies
const config = require('../config');
const http = require('http');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const socketio = require('socket.io');
const logger 	= require('./logger');
let session = require('express-session');
let MongoStore = require('connect-mongo')(session);

// Socket.io configuration
module.exports = function (app, db) {
  let server = http.createServer(app);
  // Create a new Socket.io server
  let io = socketio.listen(server);

  // Force Socket.io to ONLY use "websockets"; No Long Polling.
  io.set('transports', ['websocket']);

  // Create a MongoDB storage object
  let mongoStore =  new MongoStore({
    secret : config.sessionSecret,
    mongooseConnection : db
  });

  // Intercept Socket.io's handshake request
  io.use(function (socket, next) {
    // Use the 'cookie-parser' module to parse the request cookies
    cookieParser(config.sessionSecret)(socket.request, {}, function (err) {
      // Get the session id from the request cookies
      let sessionId = socket.request.signedCookies ? socket.request.signedCookies[config.sessionKey] : undefined;

      if (!sessionId) {
        logger.info('Reject Someone request Socket IO without logged');
        return next(new Error('sessionId was not found in socket.request'), false);
      }

      // Use the mongoStorage instance to get the Express session information
      mongoStore.get(sessionId, function (err, session) {
        if (err) return next(err, false);
        if (!session) return next(new Error('session was not found for ' + sessionId), false);

        // Set the Socket.io session information
        socket.request.session = session;

        // Use Passport to populate the user details
        passport.initialize()(socket.request, {}, function () {
          passport.session()(socket.request, {}, function () {
            if (socket.request.user) {
              next(null, true);
            } else {
              next(new Error('User is not authenticated'), false);
            }
          });
        });
      });
    });
  });

  // Call all socket handlers for binding events.
  require('../../app/socket.io')(io);

  return server;
};
