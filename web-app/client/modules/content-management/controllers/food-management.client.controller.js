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
    'FoodService', '$timeout', 'toastr', '_'
  ];

  function Controller(FoodService, $timeout, toastr, _) {
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
    vm.addKeywordsToFood = addKeywordsToFood;
    vm.removeFoodKeyword = removeFoodKeyword;
    vm.addShopsToFood = addShopsToFood;
    vm.removeFoodShop = removeFoodShop;

    /* ============= PRIVATE FUNCTION ============= **/

    /**
     * @name activeController
     * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
     * @description
     * Active controller method, it will load needed data for view page.
     */
    function activeController() {
      FoodService.query({ limit: vm.pageLimit, skip: 0 }).$promise
        .then(foods => {
          vm.foods = foods;

          if (vm.foods.length > 0) {
            vm.selectedFood = vm.foods[0];
          }
        })
        .catch(err => {
          vm.message = `Something error: ${err.data}`;
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
        vm.selectedFood = food;
      }, 0);
    }

    /**
     * @name addKeywordsToFood
     * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
     * @description
     * Saving list selected keywords to food.
     * 
     * @param {Array} keywords 
     * 
     * @return void
     */
    function addKeywordsToFood(keywords) {
      // Adding new selected keywords to current selected food.
      vm.selectedFood.keywords = _.concat(vm.selectedFood.keywords, keywords);

      let target = { id: vm.selectedFood.id };
      let data = {
        // Because sails js require format is list of word ids.
        keywords: _.map(vm.selectedFood.keywords, item => item.id)
      };

      FoodService.update(target, data).$promise
        .then(updatedFood => {
          toastr.success(`Update food ${updatedFood.name} keywords compeleted.`);

          // Remove keyword selection card.
          vm.showKeywordSelectionCard = false;
        })
        .catch(err => {
          vm.message = `Something error: ${err.data}`;
        });
    }

    /**
 * @name addShopsToFood
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @description
 * Saving list selected shops to food.
 * 
 * @param {Array} shops 
 * 
 * @return void
 */
    function addShopsToFood(shops) {
      // Adding new selected shops to current selected food.
      vm.selectedFood.shops = _.concat(vm.selectedFood.shops, shops);

      let target = { id: vm.selectedFood.id };
      let data = {
        // Because sails js require format is list of shops ids.
        shops: _.map(vm.selectedFood.shops, item => item.id)
      };

      FoodService.update(target, data).$promise
        .then(updatedFood => {
          toastr.success(`Update food ${updatedFood.name} shops compeleted.`);

          // Remove keyword selection card.
          vm.showShopSelectionCard = false;
        })
        .catch(err => {
          vm.message = `Something error: ${err.data}`;
        });
    }

    /**
     * @name removeFoodKeyword
     * @description
     * Remove selected keyword of food.
     * 
     * @param {Object} food 
     * @param {Object} keyword 
     * 
     * @return void
     */
    function removeFoodKeyword(food, keyword) {
      const check = confirm(`Remove keyword ${keyword.name} in food ${food.name} ?`);
      // If user cancel then just return.
      if (!check) return;

      // Remove selected keyword in food keywords.
      _.remove(food.keywords, item => item.id === keyword.id);

      const removeData = {
        keyword_id: keyword.id,
        food_id: food.id
      };

      FoodService.removeKeyword(removeData).$promise
        .then(() => {
          toastr.success(`Remove keyword ${keyword.name} compeleted.`);
        })
        .catch(err => {
          vm.message = `Something error: ${err.data}`;
        });
    }

    /**
     * @name removeFoodShop
     * @description
     * Remove selected shop in food.
     * 
     * @param {Object} food 
     * @param {Object} keyword 
     * 
     * @return void
     */
    function removeFoodShop(food, shop) {
      const check = confirm(`Remove shop ${shop.name} in food ${food.name} ?`);
      // If user cancel then just return.
      if (!check) return;

      // Remove selected shop in food shops.
      _.remove(food.shops, item => item.id === shop.id);

      const removeData = {
        shop_id: shop.id,
        food_id: food.id
      };

      FoodService.removeShop(removeData).$promise
        .then(() => {
          toastr.success(`Remove shop ${shop.name} compeleted.`);
        })
        .catch(err => {
          vm.message = `Something error: ${err.data}`;
        });
    }
  }
})();