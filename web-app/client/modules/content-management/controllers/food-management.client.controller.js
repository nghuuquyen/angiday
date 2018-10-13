(function() {
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

  Controller.$inject = ['FoodService'];
  function Controller(FoodService) {
    var vm = this;
  }
})();