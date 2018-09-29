"use strict";

let router = require('express').Router();

// Application routes
router.use(require('./core.server.routes'));
router.use(require('./authentication.server.routes'));

module.exports = router;
