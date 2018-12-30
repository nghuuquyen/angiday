(function () {
  'use strict';

  angular
    .module('content-management')
    .controller('CampaignCreateController', Controller);

  Controller.$inject = ['CampaignService', '$state'];
  function Controller(CampaignService, $state) {
    var vm = this;

    vm.createCampaign = createCampaign;

    vm.campaign = {
      name: '',
      description: ''
    };


    function createCampaign() {
      if (vm.campaign.name === '') vm.message = 'Campaign name is required.';
      if (vm.campaign.description === '') vm.message = 'Campaign description is required.';

      CampaignService.save(vm.campaign)
        .$promise.then(campaign => {
          $state.go('campaign-management.edit', { campaignId: campaign.id });
        });
    }
  }
})();