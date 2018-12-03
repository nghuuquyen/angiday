"use strict";

const router = require('express').Router();
const Ctrl = require('../controllers').ContentManagement;

// Content management pages.
router.route('/cms/*').get(Ctrl.renderCMSindexPage);

module.exports = router;
