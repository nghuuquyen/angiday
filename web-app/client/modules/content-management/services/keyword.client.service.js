/**
* @module services 
* @name ShopService
* @description API serice for CRUD on Keyword object.
* @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>> at 28/7/2018
*/
(function () {
  'use strict';

  angular
    .module('content-management')
    .factory('KeywordService', Service);

  Service.$inject = ['$resource', 'Host'];

  /* @ngInject */
  function Service($resource, Host) {
    const apiGateway = Host.getApiGateway();

    return $resource(apiGateway + '/keyword/:id', { id: '@id' }, {
      update: {
        method: 'PATCH'
      },
      /**
       * @name search
       * @description
       * Search keyword by word name and limit offset.
       */
      search: {
        method: 'GET',
        url: apiGateway + '/keyword/search',
        isArray: true
      }
    });
  }
})();