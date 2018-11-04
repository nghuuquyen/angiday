/**
* Created by Quyen Nguyen Huu on 5/11/2018.
* Email : nghuuquyen@gmail.com
*/
(function () {
  'use strict';

  angular
    .module('core')
    .factory('Host', HostService);

  HostService.$inject = ['$window'];

  function HostService($window) {
    var service = {
      /**
       * @name getApiGateway
       * @description
       * Get API gateway endpoint.
       */
      getApiGateway: function () {
        /**
         * Notice: window.hosts is hosts variable send from server via html
         * template.
         */
        return $window.hosts.apiGateway;
      }
    };

    return service;
  }
}());
