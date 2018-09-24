'use strict';

module.exports = function(io, socket) {
  require('./connection.server.socket')(io, socket);
};
