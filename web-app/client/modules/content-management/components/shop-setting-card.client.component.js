/**
 * @module components
 * @name FoodSettingCardComponent
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 */
(function () {
  'use strict';

  angular
    .module('content-management')
    .component('shopSettingCardComponent', {
      templateUrl: 'client/modules/content-management/components/templates/shop-setting-card.client.template.html',
      controller: Controller,
      controllerAs: 'vm',
      bindings: {
        id : '='
      },
    });

  Controller.$inject = ['ShopService'];
  
  function Controller(ShopService) {
    let vm = this;
  }
})();