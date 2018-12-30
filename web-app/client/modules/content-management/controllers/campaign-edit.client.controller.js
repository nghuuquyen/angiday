(function () {
  'use strict';

  angular
    .module('content-management')
    .controller('CampaignEditController', Controller);

  Controller.$inject = ['CampaignService', '$stateParams', 'toastr'];
  function Controller(CampaignService, $stateParams, toastr) {
    var vm = this;
    vm.searchText = '';
    vm.searchResult = {};

    active();

    vm.searchUserInteractive = searchUserInteractive;
    vm.useKeyword = useKeyword;
    vm.useFood = useFood;
    vm.updateCampaign = updateCampaign;

    function searchUserInteractive() {
      CampaignService.searchUserInteractive({ q: vm.searchText })
        .$promise.then(result => {
          vm.searchResult = result;
        });
    }


    function active() {
      CampaignService.get({ id: $stateParams.campaignId }).$promise
        .then(campaign => {
          vm.campaign = campaign;

          vm.campaign.startDate = new Date(vm.campaign.startDate);
        });
    }

    function updateCampaign() {
      CampaignService.update({ id: vm.campaign.id }, vm.campaign)
        .$promise.then(() => {
          toastr.success(`Update campaign ${vm.campaign.name} compeleted.`);
        });
    }

    function useFood(food) {
      let index = vm.campaign.foods.findIndex(item => item.id === food.id);

      if (index === -1)
        vm.campaign.foods.push(food);
    }

    function useKeyword(keyword) {
      let index = vm.campaign.keywords.findIndex(item => item.id === keyword.id);

      keyword.text = keyword.name;
      if (index === -1)
        vm.campaign.keywords.push(keyword);
    }
  }
})();