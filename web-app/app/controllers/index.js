"use strict";

module.exports = {
  Core : require('./core.server.controller'),
  Auth : require('./authentication.server.controller'),
  ContentManagement: require('./content-management.server.controller'),
  SearchFood: require('./search-food.server.controller'),
  Food: require('./food.server.controller'),
  Shop: require('./shop.server.controller')
};
