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
    'FoodService', '$timeout'
  ];

  function Controller(FoodService, $timeout) {
    let vm = this;

    /**
     * @var Array
     * List of foods
     */
    vm.foods = [];

    /**
     * @var Number 
     * Limit food items display for each page.
     */
    vm.pageLimit = 30;

    // Initial controller.
    activeController();

    /* ============= PUBLIC FUNCTIONS ============= **/
    vm.viewDetailFood = viewDetailFood;

    /* ============= PRIVATE FUNCTION ============= **/

    /**
     * @name activeController
     * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
     * @description
     * Active controller method, it will load needed data for view page.
     */
    function activeController() {
      FoodService.search({ limit: vm.pageLimit, skip: 0 }).$promise
        .then(foods => {
          vm.foods = foods;
        });
    }

    /**
     * @name viewDetailFood
     * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
     * @description
     * Show detail food card.
     * @param {Object} food 
     */
    function viewDetailFood(food) {
      // Set to null and compose with timeout for re-render card.
      vm.selectedFood = null;

      $timeout(() => {
        vm.selectedFood = angular.copy(food);
      }, 0);
    }
  }
})();