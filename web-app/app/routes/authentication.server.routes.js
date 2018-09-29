'user strict';

let router = require('express').Router();
const AuthCtrl = require('../controllers').Auth;

router.route('/signin')
  .get(AuthCtrl.renderSigninPage)
  .post(AuthCtrl.signin);

router.route('/signup')
  .get(AuthCtrl.renderSignupPage)
  .post(AuthCtrl.signup);

router.route('/signout')
  .get(AuthCtrl.signout);

module.exports = router;
