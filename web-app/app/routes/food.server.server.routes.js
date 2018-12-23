"use strict";

const router = require('express').Router();
const Ctrl = require('../controllers').Food;

// Public about page.
router.route('/food/:food_id').get(Ctrl.renderFoodDetailPage);
router.route('/food').get(Ctrl.renderFoodIndexPage);

module.exports = router;