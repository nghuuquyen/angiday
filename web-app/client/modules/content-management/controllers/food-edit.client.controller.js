(function () {
  /**
   * @module controllers
   * @name FoodEditController
   * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
   * @description
   * Controller for edid food screen.
   */
  'use strict';

  angular
    .module('content-management')
    .controller('FoodEditController', Controller);

  Controller.$inject = [
    'FoodService', '$timeout', 'toastr', '_', '$stateParams'
  ];

  function Controller(FoodService, $timeout, toastr, _, $stateParams) {
    let vm = this;

    // Initial controller.
    activeController();

    /* ============= PUBLIC FUNCTIONS ============= **/
    vm.addKeywordsToFood = addKeywordsToFood;
    vm.removeFoodKeyword = removeFoodKeyword;
    vm.addShopsToFood = addShopsToFood;
    vm.removeFoodShop = removeFoodShop;
    vm.onUpdateFoodSuccess = onUpdateFoodSuccess;

    /* ============= PRIVATE FUNCTION ============= **/

    /**
     * @name activeController
     * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
     * @description
     * Active controller method, it will load selected food via id on URL params 
     * data for view page.
     */
    function activeController() {
      FoodService.get({ id: $stateParams.foodId }).$promise
        .then(food => {
          vm.food = food;
        })
        .catch(err => {
          vm.message = `Something error: ${err.data}`;
        });
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
      vm.food.keywords = _.concat(vm.food.keywords, keywords);

      let target = { id: vm.food.id };
      let data = {
        // Because sails js require format is list of word ids.
        keywords: _.map(vm.food.keywords, item => item.id)
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
      vm.food.shops = _.concat(vm.food.shops, shops);

      let target = { id: vm.food.id };
      let data = {
        // Because sails js require format is list of shops ids.
        shops: _.map(vm.food.shops, item => item.id)
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

    /**
     * @name onUpdateFoodSuccess
     * @description
     * Handle event callback when one food that updated successfully.
     * 
     * @param {Object} food 
     */
    function onUpdateFoodSuccess(food) {
      // Update current selected food.
      vm.food = food;
    }
  }
})();