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

    /**
     * @var Array
     * List of foods
     */
    vm.foods = [];

    /**
     * @var Number 
     * Limit food items display for each page.
     */
    vm.pageLimit = 100; // -1 mean no limit

    // Initial controller.
    activeController();

    /**
     * @name activeController
     * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
     * @description
     * Active controller method, it will load needed data for view page.
     */
    function activeController() {
      FoodService.query({ limit: vm.pageLimit, skip: 0, sort: 'createdAt DESC' }).$promise
        .then(foods => {
          vm.foods = foods;
        })
        .catch(err => {
          vm.message = `Something error: ${err.data}`;
        });
    }
  }
})();