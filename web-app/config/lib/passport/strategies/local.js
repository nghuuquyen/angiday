'use strict';

/**
* Module dependencies
*/
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserService = require('../../../../app/services').UserService;

module.exports = function () {
  passport.use('local', new LocalStrategy({
    usernameField: 'usernameOrEmail',
    passwordField: 'password'
  }, (usernameOrEmail, password, done) => {
    UserService.signin(usernameOrEmail, password)
      .then(user => {
        return done(null, user);
      })
      .catch(err => {
        return done(null, false, {
          message: 'Invalid username or password (' + (new Date()).toLocaleTimeString() + ')'
        });
      });
  }));
};
