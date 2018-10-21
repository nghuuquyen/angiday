/**
 * @module components
 * @name KeyWordSettingCardComponent
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 */
(function () {
  'use strict';

  angular
    .module('content-management')
    .component('keywordSettingCardComponent', {
      templateUrl: 'client/modules/content-management/components/templates/keyword-setting-card.client.template.html',
      controller: Controller,
      controllerAs: 'vm',
      bindings: {
        id : '='
      },
    });

  Controller.$inject = ['KeywordService'];
  
  function Controller(KeywordService) {
    let vm = this;
  }
})();