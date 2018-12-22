"use strict";
/**
* Module dependencies
*/
const passport = require('passport');
const User = require('mongoose').model('User');
const UserService = require('../../../app/services').UserService;

module.exports = function init(app, db) {
  // 1. Add passport's middleware.
  app.use(passport.initialize());
  app.use(passport.session());

  // 2. Load all defined strategies.
  loadAllStrategies();

  // 3. initial local strategy session.
  initLocalStrategy();
};

/**
* @name loadAllStrategies
* @description
* Load and initial all strategies.
*/
function loadAllStrategies() {
  require('./strategies/local')();
}


/**
* @name initLocalStrategy
* @description
* initialize local passport session for populate user information
* to HTTP request after user logged completed.
*/
function initLocalStrategy() {
  // Serialize sessions
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  // Deserialize sessions
  passport.deserializeUser(function (id, done) {
    UserService.findOne(id)
      .then(user => {
        let userProfile = {
          id: user.id,
          username: user.username,
          email: user.email,
          fullName: user.fullName
        };

        done(null, userProfile);
      })
      .catch(err => {
        done(err, null);
      });
  });
}
