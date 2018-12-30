(function () {
  'use strict';

  angular
    .module('content-management')
    .controller('CampaignListController', Controller);

  Controller.$inject = ['CampaignService'];
  function Controller(CampaignService) {
    var vm = this;
    active();

    function active() {
      loadCampaginList();
    }

    function loadCampaginList() {
      CampaignService.query({ limit: -1 })
        .$promise.then(campaigns => {
          vm.campaigns = campaigns;
        })
        .catch(err => vm.message = err.message);
    }
  }
})();