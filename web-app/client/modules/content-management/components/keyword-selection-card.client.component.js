/**
 * @module components
 * @name KeywordSelectionCardComponent
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 */
(function () {
  'use strict';

  angular
    .module('content-management')
    .component('keywordSelectionCardComponent', {
      templateUrl: 'client/modules/content-management/components/templates/keyword-selection-card.client.template.html',
      controller: Controller,
      controllerAs: 'vm',
      bindings: {
        onSubmit: '&'
      },
    });

  Controller.$inject = [
    'KeywordService', '_', 'toastr'
  ];

  function Controller(KeywordService, _, toastr) {
    let vm = this;

    /**
     * @var Object 
     * Keyword model.
     */
    vm.keyword = getEmptyKeywordModel();

    /**
     * @var Array
     * Seleced keyword collection.
     */
    vm.selectedKeywords = [];

    /** =========== PUBLIC FUNCTIONS =========== **/
    vm.searchKeywords = searchKeywords;
    vm.createKeyword = createKeyword;
    vm.saveAndSelect = saveAndSelect;

    /** =========== PRIVITE FUNCTIONS =========== **/

    /**
     * @name searchKeywords
     * @description
     * Search keywords by wordname.
     * 
     * @param {String} keyword 
     * 
     * @return promise<Array>
     */
    function searchKeywords(keyword) {
      return KeywordService.search({ keyword: keyword }).$promise
        .then(keywords => {
          return _.map(keywords, keyword => {
            // Transform to ng-tags input format.
            return {
              name: keyword.name,
              text: keyword.name,
              id: keyword.id,
              score: keyword.score
            };
          });
        })
        .then(keywords => {
          return keywords;
        });
    }

    /**
     * @name getEmptyKeywordModel
     * @description
     * Get empty keyword model.
     */
    function getEmptyKeywordModel() {
      return {
        name: '',
        description: ''
      };
    }
    /**
     * @name createKeyword
     * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
     * @description
     * Create new keyword.
     * 
     * @param {Boolean} $valid - form validation.
     * 
     * @return Promise<Object>
     */
    function createKeyword($valid) {
      if (!$valid) return;

      let keyword = _.pick(vm.keyword, ['name', 'description']);

      return KeywordService.save(keyword).$promise
        .then(keyword => {
          toastr.success(`Creating keyword ${keyword.name} compeleted.`);

          // Push to selected collection.
          vm.selectedKeywords.push({
            name: keyword.name,
            text: keyword.name,
            id: keyword.id,
            score: keyword.score
          });

          // Reset form.
          vm.keyword = getEmptyKeywordModel();
        });
    }

    /**
     * @name saveAndSelect
     * @description
     * Save and return back selected keywords collection via method reference.
     * 
     * @return void
     */
    function saveAndSelect() {
      // Call calback reference method.
      vm.onSubmit({ keywords: vm.selectedKeywords });
    }
  }
})();