"use strict";

const router = require('express').Router();
const Ctrl = require('../controllers').ContentManagement;

// Public home page.
router.route('/secure/food-management').get(Ctrl.renderFoodManagementPage);

module.exports = router;
