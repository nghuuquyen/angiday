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
    .controller('FoodCreateController', Controller);

  Controller.$inject = [
    '$state'
  ];

  function Controller($state) {
    let vm = this;

    /* ============= PUBLIC FUNCTIONS ============= **/
    vm.onCreateFoodSuccess = onCreateFoodSuccess;

    /**
     * @name onCreateFoodSuccess
     * @description
     * Handle event callback when one food that created successfully.
     * 
     * @param {Object} food 
     */
    function onCreateFoodSuccess(food) {
      $state.go('food-management.edit', { foodId: food.id });
    }
  }
})();