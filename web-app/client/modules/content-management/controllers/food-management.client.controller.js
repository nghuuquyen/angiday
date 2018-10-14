(function () {
  /**
   * @module controllers
   * @name FoodManagementController
   * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
   * @description
   * Controller for managed food CRUD methods.
   */
  'use strict';

  angular
    .module('content-management')
    .controller('FoodManagementController', Controller);

  Controller.$inject = [
    'FoodService'
  ];

  function Controller(FoodService) {
    let vm = this;

    vm.foods = getDummyFoods() || [];


    function getDummyFoods() {
      return [
        {
          name: 'Food 1',
          description: 'Food 1 description.',
          keywords: [
            { name: 'Keyword 1', description: 'Keyword 1 Description', type: 'search' },
            { name: 'Keyword 2', description: 'Keyword 2 Description', type: 'search' },
            { name: 'Keyword 3', description: 'Keyword 3 Description', type: 'search' }
          ]
        },
        {
          name: 'Food 2',
          description: 'Food 2 description.',
          keywords: [
            { name: 'Keyword 4', description: 'Keyword 4 Description', type: 'search' },
            { name: 'Keyword 5', description: 'Keyword 5 Description', type: 'search' },
            { name: 'Keyword 6', description: 'Keyword 6 Description', type: 'search' }
          ]
        },
        {
          name: 'Food 3',
          description: 'Food 3 description.',
          keywords: [
            { name: 'Keyword 7', description: 'Keyword 7 Description', type: 'search' },
            { name: 'Keyword 8', description: 'Keyword 8 Description', type: 'search' },
            { name: 'Keyword 9', description: 'Keyword 9 Description', type: 'search' }
          ]
        }
      ];
    }
  }
})();