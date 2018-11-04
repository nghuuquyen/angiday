/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 */
(function () {
  'use strict';

  angular
    .module('core')
    .controller('SearchResultV2Controller', Controller);

  Controller.$inject = [];
  function Controller() {
    var vm = this;
 
    //======== Public methods =========

    vm.searchFood = searchFood;


    // ======= variables ==========

    /**
     * @var String 
     * Search query string.
     */
    vm.seachQuery = '';

    /**
     * @var Array 
     * Collection of food.
     */
    vm.foods = getFoodsFromDatasource();

    /**
     * @var Array 
     * Collection of recommedation item.
     */
    vm.recommends = [
      { name: 'Bánh bèo', number_shops: 15, type: 'food' },
      { name: 'Bánh ướt', number_shops: 10, type: 'food' },
      { name: 'Bánh nậm', number_shops: 12, type: 'food' },
      { name: 'Bánh xèo', number_shops: 10, type: 'food' },
      { name: 'Quán ăn 1', address: 'Da Nang', type: 'shop' },
      { name: 'Quán ăn 2', address: 'Da Nang', type: 'shop' },
      { name: 'Quán ăn 3', address: 'Da Nang', type: 'shop' },
    ];

    /**
     * @author Quyen Nguyen Huu <<nghuuquyen@gmai.com>>
     * @description
     * Do filter foods collection.
     * 
     */
    function searchFood() {
      if(vm.seachQuery.length === 0) {
        vm.foods = getFoodsFromDatasource();
      }

      vm.foods = getFoodsFromDatasource().filter(food => {
        return food.name.search(vm.seachQuery) !== -1;
      });
    }

    /**
     * @name getFoodsFromDatasource
     * @description
     * Get food collection.
     */
    function getFoodsFromDatasource() {
      return [
        { name: 'Bánh bèo', number_shops: 15 },
        { name: 'Bánh ướt', number_shops: 10 },
        { name: 'Bánh nậm', number_shops: 12 },
        { name: 'Bánh xèo', number_shops: 10 }
      ];
    }
  }
})();