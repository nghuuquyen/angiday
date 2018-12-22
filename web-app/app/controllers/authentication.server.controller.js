
'use strict';

/**
* Module dependencies
*/
const passport = require('passport');
const UserService = require('../services').UserService;
const logger = require('../../config/lib/logger');

const VIEWS = {
  SIGNIN_PAGE: 'pages/user/signin',
  SIGNUP_PAGE: 'pages/user/signup'
};

/**
* URL will send user to after logged completed. You should define it
* on core.server.controller.js
*
* @type {String}
*/
const REDIRECT_URL_AFTER_LOGGED = '/';

// URLs for which user can't be redirected on signin
var noReturnUrls = [
  '/authentication/signin',
  '/authentication/signup'
];

module.exports = {
  signup,
  signin,
  signout,
  renderSignupPage,
  renderSigninPage
};

function renderSigninPage(req, res) {

  // Check user in session or passport session.
  if (req.user || req.isAuthenticated()) {
    return res.redirect(REDIRECT_URL_AFTER_LOGGED);
  }

  res.render(VIEWS.SIGNIN_PAGE, {
    messages: 'Flash messages here'
  });
}

function renderSignupPage(req, res) {
  res.render(VIEWS.SIGNUP_PAGE, {
    messages: 'Flash messages here'
  });
}

/**
* @name signup
* @description
* Handle signup user account.
*
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function signup(req, res) {
  let userData = {
    username: req.body.username,
    fullName: req.body.lastName + ' ' + req.body.firstName,
    password: req.body.password,
    email: req.body.email
  };

  UserService.create(userData)
    .then(user => {
      // Remove sensitive data before login
      user.password = undefined;
      user.salt = undefined;

      req.login(user, function (err) {
        if (err) {
          logger.error(err);
          return res.status(400).render(VIEWS.SIGNUP_PAGE, {
            message: err.message
          });
        }

        res.redirect(REDIRECT_URL_AFTER_LOGGED);
      });
    }).catch(err => {
      logger.error(err);
      return res.status(422).render(VIEWS.SIGNUP_PAGE, {
        message: err.message
      });
    });
}

/**
* @name signin
* @description
* Handle signin user account.
*
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function signin(req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err || !user) {
      logger.error(err);
      res.status(422).send(info);
    } else {
      // Remove sensitive data before login
      user.password = undefined;
      user.salt = undefined;

      let userProfile = {
        id: user.id,
        username: user.username,
        email: user.email,
        fullName: user.fullName
      };

      req.login(userProfile, function (err) {
        if (err) {
          console.log(err);
          return res.status(400).render(VIEWS.SIGNIN_PAGE, {
            message: err.message
          });
        }

        res.redirect(REDIRECT_URL_AFTER_LOGGED);
      });
    }
  })(req, res, next);
}

/**
* @name signout
* @description
* Handle signout user account.
*
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function signout(req, res) {
  req.logout();
  res.redirect('/');
}
