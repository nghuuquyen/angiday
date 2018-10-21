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

  Service.$inject = ['$resource', '$rootScope'];

  /* @ngInject */
  function Service($resource, $rootScope) {
    const base = $rootScope.hosts.api;

    return $resource(base + '/keyword/:id', { id: '@id' }, {
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
        url: base + '/keyword/search',
        isArray: true
      }
    });
  }
})();