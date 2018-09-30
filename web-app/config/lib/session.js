"use strict";

const config = require('../config');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

/**
* @name initSession
* @description
* Setup saving session to mongodb.
*
* @param  {object} app express instance
* @param  {object} db  mongoose instance
* @return {object}     session middleware config
*/
function initSession(app, db) {
  app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: config.sessionSecret,
    cookie: {
      maxAge: config.sessionCookie.maxAge,
      httpOnly: config.sessionCookie.httpOnly,
      /**
      * If you have cookie.secure set to true and you're NOT using SSL
      * (i.e. https protocol) then the cookie with the session id
      * is not returned to the browser and everything fails silently.
      */
      secure: config.sessionCookie.secure && config.secure.ssl
    },
    name: config.sessionKey,
    store: new MongoStore({
      secret : config.sessionSecret,
      mongooseConnection : db
    })
  }));
}

module.exports = initSession;
