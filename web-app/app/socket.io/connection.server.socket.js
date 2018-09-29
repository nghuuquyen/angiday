'use strict';

const logger = require('../../config/lib/logger');

// Create the socket handler for handle user connection.
module.exports = function (io) {

  // Connection namespace
  io.of('/connection').on('connection', socket => {
    const _user = socket.request.user;
    logger.debug(`User ${_user.username} connected.`);
  });
};
