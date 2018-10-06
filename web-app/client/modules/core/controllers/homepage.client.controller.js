/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module controller 
 * @description
 * Controller for homepage.
 */
(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomePageController', Controller);

  Controller.$inject = ['$q'];
  function Controller($q) {
    var vm = this;

    // ********* PUBLIC VARIABLES ********* //

    /**
     * @var Array 
     * @description 
     * Input tags selected by user.
     */
    vm.tags = [
      { text: 'Ngon', id: '1' },
      { text: 'Bổ', id: '2' },
      { text: 'Rẻ', id: '3' }
    ];

    // ********* PUBLIC FUNCTIONS ********* //
    vm.loadTags = loadTags;
    vm.doSearchFoodByTags = doSearchFoodByTags;

    // ********* PRIVATE FUNCTIONS ********* //

    /**
     * @name loadTags
     * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
     * @description
     * Funcation called when user input keyword to search input, it perform 
     * autocomplete feature.
     * 
     * @param {String} query 
     * @return {Promise<Object>} List tags matching with input query string. 
     */
    function loadTags(query) {
      var findTags = [
        { text: 'ngon', id: '4' },
        { text: 'Trà Sữa', id: '5' },
        { text: 'Không gian đẹp', id: '6' },
        { text: 'Không đường', id: '7' },
        { text: 'Nóng', id: '8' },
        { text: 'Cay', id: '9' },
        { text: 'Ngọt', id: '10' },
        { text: 'Có nước', id: '11' }
      ];

      return $q.when(findTags);
    }

    /**
     * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
     * @name doSearchFoodByTags
     * @description
     * Get input tags from user and redirect to search results page.
     * 
     * @return void 
     */
    function doSearchFoodByTags() {
      console.log('Selected tags by user is: ', vm.tags);
    }
  }
})();