/**
 * @module components
 * @name KeywordSelectionCardComponent
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 */
(function () {
  'use strict';

  angular
    .module('content-management')
    .component('shopSelectionCardComponent', {
      templateUrl: 'client/modules/content-management/components/templates/shop-selection-card.client.template.html',
      controller: Controller,
      controllerAs: 'vm',
      bindings: {
        onSubmit: '&'
      },
    });

  Controller.$inject = [
    'ShopService', '_', 'toastr'
  ];

  function Controller(ShopService, _, toastr) {
    let vm = this;

    /**
     * @var Object 
     * shop model.
     */
    vm.shop = getEmptyShopModel();

    /**
     * @var Array
     * Seleced shop collection.
     */
    vm.selectedShops = [];

    /** =========== PUBLIC FUNCTIONS =========== **/
    vm.searchShops = searchShops;
    vm.createShop = createShop;
    vm.saveAndSelect = saveAndSelect;

    /** =========== PRIVITE FUNCTIONS =========== **/

    /**
     * @name searchShops
     * @description
     * Search shops by shop name.
     * 
     * @param {String} keyword 
     * 
     * @return promise<Array>
     */
    function searchShops(keyword) {
      return ShopService.search({ keyword: keyword }).$promise
        .then(shops => {
          return _.map(shops, shop => {
            // Transform to ng-tags input format.
            return {
              name: shop.name,
              text: shop.name,
              id: shop.id,
              score: shop.score
            };
          });
        })
        .then(shops => {
          return shops;
        });
    }

    /**
     * @name getEmptyShopModel
     * @description
     * Get empty shop model.
     */
    function getEmptyShopModel() {
      return {
        name: '',
        description: ''
      };
    }
    /**
     * @name createShop
     * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
     * @description
     * Create new shop.
     * 
     * @param {Boolean} $valid - form validation.
     * 
     * @return Promise<Object>
     */
    function createShop($valid) {
      if (!$valid) return;

      let shop = _.pick(vm.shop, ['name', 'description']);

      return ShopService.save(shop).$promise
        .then(shop => {
          toastr.success(`Creating shop ${shop.name} compeleted.`);

          // Push to selected collection.
          vm.selectedShops.push({
            name: shop.name,
            text: shop.name,
            id: shop.id,
            score: shop.score
          });

          // Reset form.
          vm.shop = getEmptyShopModel();
        });
    }

    /**
     * @name saveAndSelect
     * @description
     * Save and return back selected shops collection via method reference.
     * 
     * @return void
     */
    function saveAndSelect() {
      // Call calback reference method.
      vm.onSubmit({ shops: vm.selectedShops });
    }
  }
})();