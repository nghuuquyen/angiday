/**
* Created by Quyen Nguyen Huu on 24/09/2018.
* Email : nghuuquyen@gmail.com
*/
(function () {
  'use strict';

  // Setting up route
  angular.module('core')
    .config(RoutesConfigs);

  RoutesConfigs.$inject = [
    '$stateProvider'
  ];

  /* @ngInject */
  function RoutesConfigs($stateProvider) {
    var _baseUrl = 'client/modules/core/views';

    $stateProvider.state('user-dashboard', {
      url: '/u',
      views: {
        '@': {
          templateUrl: _baseUrl + '/dashboard.client.view.html',
          controller: 'DashboardController',
          controllerAs: 'vm'
        }
      }
    });
  }
}());
