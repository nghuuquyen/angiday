/**
* @module services 
* @name ShopService
* @description API serice for CRUD on Keyword object.
* @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>> at 28/7/2018
*/
(function () {
  'use strict';

  angular
    .module('core')
    .factory('UserCollectionService', Service);

  Service.$inject = ['$resource', 'Host'];

  /* @ngInject */
  function Service($resource, Host) {
    const apiGateway = Host.getApiGateway();

    return $resource(apiGateway + '/usercollection/:id', { id: '@id' }, {
      update: {
        method: 'PATCH'
      }
    });
  }
})();