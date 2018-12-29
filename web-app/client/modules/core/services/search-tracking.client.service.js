(function () {
  'use strict';

  angular
    .module('core')
    .factory('SearchTrackingService', Service);

  Service.$inject = ['$resource', 'Host'];

  /* @ngInject */
  function Service($resource, Host) {
    const apiGateway = Host.getApiGateway();

    return $resource(apiGateway + '/searchtracking/:id', { id: '@id' }, {
      update: {
        method: 'PATCH'
      }
    });
  }
})();