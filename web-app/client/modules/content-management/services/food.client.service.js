/**
* @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
* @created 28/7/2018
*/
(function () {
  'use strict';

  angular
    .module('content-management')
    .factory('FoodService', Service);

  Service.$inject = ['$resource', '$rootScope'];

  /* @ngInject */
  function Service($resource, $rootScope) {
    alert($rootScope.hosts);
    
    return $resource($rootScope.hosts.api + '/food/:id', { id: '@id' }, {
      update: {
        method: 'PUT'
      }
    });
  }
})();