/**
* @module services 
* @name ShopService
* @description API serice for CRUD on Shop object.
* @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
*/
(function () {
  'use strict';

  angular
    .module('content-management')
    .factory('ShopService', Service);

  Service.$inject = ['$resource', '$rootScope'];

  /* @ngInject */
  function Service($resource, $rootScope) {
    const base = $rootScope.hosts.api;

    return $resource(base + '/shop/:id', { id: '@id' }, {
      update: {
        method: 'PUT'
      },
      /**
       * @name search
       * @description
       * Search shop by name and limit offset.
       */
      search: {
        method: 'GET',
        url: base + '/shop/search',
        isArray: true
      }
    });
  }
})();