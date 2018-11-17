"use strict";

const router = require('express').Router();
const Ctrl = require('../controllers').Shop;

// Public about page.
router.route('/shop/:shop_id').get(Ctrl.renderShopDetailPage);
router.route('/shop').get(Ctrl.renderShopIndexPage);

module.exports = router;