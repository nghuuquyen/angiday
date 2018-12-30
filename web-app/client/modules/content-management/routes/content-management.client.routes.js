(function () {
  'use strict';

  // Setting up route
  angular.module('content-management').config(['$stateProvider',
    function ($stateProvider) {

      $stateProvider
        /*
        * CMS Page.
        * -----
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
        })
        /*
        * Campagin Page.
        * -----
        */
        .state('campaign-management', {
          url: '/cms/campaign',
          views: {
            'content': {
              templateUrl: 'client/modules/content-management/views/campagin-list.client.view.html',
              controller: 'CampaignListController',
              controllerAs: 'vm'
            }
          }
        })
        .state('campaign-management.create', {
          url: '/create',
          views: {
            'content@': {
              templateUrl: 'client/modules/content-management/views/campagin-create.client.view.html',
              controller: 'CampaignCreateController',
              controllerAs: 'vm'
            }
          }
        })
        .state('campaign-management.edit', {
          url: '/:campaignId',
          views: {
            'content@': {
              templateUrl: 'client/modules/content-management/views/campagin-edit.client.view.html',
              controller: 'CampaignEditController',
              controllerAs: 'vm'
            }
          }
        });
    }]);
}());
