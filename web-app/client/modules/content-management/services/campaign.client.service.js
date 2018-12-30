/**
* @module services 
* @name ShopService
* @description API serice for CRUD on Campaign object.
* @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>> at 28/12/2018
*/
(function () {
  'use strict';

  angular
    .module('content-management')
    .factory('CampaignService', Service);

  Service.$inject = ['$resource', 'Host'];

  /* @ngInject */
  function Service($resource, Host) {
    const apiGateway = Host.getApiGateway();

    return $resource(apiGateway + '/campaign/:id', { id: '@id' }, {
      update: {
        method: 'PATCH'
      },
      searchUserInteractive: {
        method: 'GET',
        url: apiGateway + '/search/user-interactive'
      }
    });
  }
})();