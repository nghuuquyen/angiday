"use strict";

let router = require('express').Router();

// Application routes
router.use(require('./core.server.routes'));
router.use(require('./authentication.server.routes'));
router.use(require('./content-management.server.routes'));
router.use(require('./demo.server.routes'));
router.use(require('./food.server.server.routes'));

module.exports = router;
