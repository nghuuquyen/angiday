/**
* @module services 
* @name ShopService
* @description API serice for CRUD on Food object.
* @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>> at 28/7/2018
*/
(function () {
  'use strict';

  angular
    .module('content-management')
    .factory('FoodService', Service);

  Service.$inject = ['$resource', '$rootScope'];

  /* @ngInject */
  function Service($resource, $rootScope) {
    return $resource($rootScope.hosts.api + '/food/:id', { id: '@id' }, {
      update: {
        method: 'PUT'
      },
      /**
       * @name search
       * @description
       * Search food by name and limit offset.
       */
      search: {
        method: 'GET',
        isArray: true,
        url: $rootScope.hosts.api + '/food/search'
      }
    });
  }
})();