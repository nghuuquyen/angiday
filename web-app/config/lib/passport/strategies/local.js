'use strict';

/**
* Module dependencies
*/
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('mongoose').model('User');

module.exports = function () {
  // Use local strategy
  passport.use('local', new LocalStrategy({
    usernameField: 'usernameOrEmail',
    passwordField: 'password'
  },
  function (usernameOrEmail, password, done) {
    User.findOne({
      $or: [{
        username: usernameOrEmail.toLowerCase()
      }, {
        email: usernameOrEmail.toLowerCase()
      }]
    }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user || !user.authenticate(password)) {
        return done(null, false, {
          message: 'Invalid username or password (' + (new Date()).toLocaleTimeString() + ')'
        });
      }

      return done(null, user);
    });
  }));
};
