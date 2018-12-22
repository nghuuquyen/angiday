(function () {
  'use strict';

  // Setting up route
  angular.module('content-management').config(['$stateProvider',
    function ($stateProvider) {

      $stateProvider
        /*
        * Course Results Page.
        * -----
        * For student or lecturer see course results.
        */
        .state('food-management', {
          url: '/cms/food',
          views: {
            'content': {
              templateUrl: 'client/modules/content-management/views/food-list.client.view.html',
              controller: 'FoodManagementController',
              controllerAs: 'vm'
            }
          }
        })
        .state('food-management.create', {
          url: '/create',
          views: {
            'content@': {
              templateUrl: 'client/modules/content-management/views/food-create.client.view.html',
              controller: 'FoodCreateController',
              controllerAs: 'vm'
            }
          }
        })
        .state('food-management.edit', {
          url: '/:foodId',
          views: {
            'content@': {
              templateUrl: 'client/modules/content-management/views/food-edit.client.view.html',
              controller: 'FoodEditController',
              controllerAs: 'vm'
            }
          }
        });
    }]);
}());
