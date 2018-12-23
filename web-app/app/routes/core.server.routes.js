"use strict";

const router = require('express').Router();
const CoreCtrl = require('../controllers').Core;
const SearchFood = require('../controllers').SearchFood;

// Public home page.
router.route('/').get(CoreCtrl.renderHomePage);

// Public search results page.
router.route('/search').get(SearchFood.renderSearchFoodPage);

// Public about page.
router.route('/about').get((req, res) => {
  res.render('about');
});

// Private home page for logged user redirect to
router.route('/u').get(
  CoreCtrl.isAuthenticated,
  CoreCtrl.renderUserDashboard
);

// Make sure all routes has prefix u is authenticated.
router.route('/u/*')
  .get(CoreCtrl.isAuthenticated);

module.exports = router;
