(function () {
  'use strict';

  angular
    .module('core')
    .factory('UserTrackingService', Service);

  Service.$inject = ['$resource', 'Host'];

  /* @ngInject */
  function Service($resource, Host) {
    const apiGateway = Host.getApiGateway();

    return $resource('', {}, {
      keywordInteractiveLog: {
        method: 'POST',
        url: apiGateway + '/keyword/user-tracking'
      },
      foodInteractiveLog: {
        method: 'POST',
        url: apiGateway + '/food/user-tracking'
      }
    });
  }
})();