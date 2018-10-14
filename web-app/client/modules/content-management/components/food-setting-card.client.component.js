/**
 * @module components
 * @name KeyWordSettingCardComponent
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 */
(function () {
  'use strict';

  angular
    .module('content-management')
    .component('foodSettingCardComponent', {
      templateUrl: 'client/modules/content-management/components/templates/food-setting-card.client.template.html',
      controller: Controller,
      controllerAs: 'vm',
      bindings: {
        id : '='
      },
    });

  Controller.$inject = ['FoodService'];
  
  function Controller(FoodService) {
    let vm = this;
  }
})();