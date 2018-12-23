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

  Service.$inject = ['$resource', 'Host'];

  /* @ngInject */
  function Service($resource, Host) {
    const apiGateway = Host.getApiGateway();

    return $resource(apiGateway + '/shop/:id', { id: '@id' }, {
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
        url: apiGateway + '/shop/search',
        isArray: true
      }
    });
  }
})();