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
    return $resource($rootScope.hosts.api + '/shop/:id', { id: '@id' }, {
      update: {
        method: 'PUT'
      }
    });
  }
})();