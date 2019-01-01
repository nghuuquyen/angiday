(function () {
  'use strict';

  angular
    .module('content-management')
    .controller('CampaignEditController', Controller);

  Controller.$inject = [
    'CampaignService', '$stateParams', 'toastr', 'KeywordService', '_', 'Host'
  ];
  function Controller(CampaignService, $stateParams, toastr, KeywordService, _, Host) {
    var vm = this;

    const apiGateway = Host.getApiGateway();

    vm.searchText = '';
    vm.searchResult = {};

    active();

    vm.searchUserInteractive = searchUserInteractive;
    vm.useKeyword = useKeyword;
    vm.useFood = useFood;
    vm.updateCampaign = updateCampaign;
    vm.loadTags = loadTags;
    vm.calculatingReachUser = calculatingReachUser;
    vm.removeFood = removeFood;
    vm.getDownloadLink = getDownloadLink;


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
      return KeywordService.search({ keyword: query }).$promise
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

          calculatingReachUser();
        });
    }

    function updateCampaign(isConfirmed) {

      if (isConfirmed === true) {
        vm.campaign.confirmed = true;
      } else {
        vm.campaign.confirmed = false;
      }

      CampaignService.update({ id: vm.campaign.id }, vm.campaign)
        .$promise.then(() => {
          toastr.success(`Update campaign ${vm.campaign.name} compeleted.`);
        });
    }

    function useFood(food) {
      let index = vm.campaign.foods.findIndex(item => item.id === food.id);

      if (index === -1) {
        vm.campaign.foods.push(food);
        calculatingReachUser();
      }
    }

    function useKeyword(keyword) {
      let index = vm.campaign.keywords.findIndex(item => item.id === keyword.id);

      keyword.text = keyword.name;
      if (index === -1) {
        vm.campaign.keywords.push(keyword);
        calculatingReachUser();
      }
    }

    function getDownloadLink() {
      if (vm.campaign.foods.length === 0 && vm.campaign.keywords.length === 0) {
        return '';
      }

      let foodsIds;
      let keywordIds;

      if (vm.campaign.foods.length > 0) {
        foodsIds = vm.campaign.foods.map(food => food.id).join(',');
      }

      if (vm.campaign.keywords.length > 0) {
        keywordIds = vm.campaign.keywords.map(keyword => keyword.id).join(',');
      }


      let downloadURl = apiGateway + '/search/user/download';

      if (vm.campaign.foods.length > 0) {
        downloadURl += '?' + 'foods=' + foodsIds;
      }

      if (vm.campaign.keywords.length > 0) {
        if (downloadURl.indexOf('?') === -1) {
          downloadURl += '?' + 'keywords=' + keywordIds;
        } else {
          downloadURl += '&' + 'keywords=' + keywordIds;
        }
      }

      return downloadURl;
    }


    function calculatingReachUser() {

      if (vm.campaign.foods.length === 0 && vm.campaign.keywords.length === 0) {
        vm.totalReachUser = 0;
        vm.reachUsers = [];

        vm.downloadLink = '';
        return;
      }

      let foodsIds;
      let keywordIds;

      if (vm.campaign.foods.length > 0) {
        foodsIds = vm.campaign.foods.map(food => food.id).join(',');
      }

      if (vm.campaign.keywords.length > 0) {
        keywordIds = vm.campaign.keywords.map(keyword => keyword.id).join(',');
      }

      CampaignService.searchUser({ foods: foodsIds, keywords: keywordIds })
        .$promise.then(users => {
          vm.totalReachUser = users.length;
          vm.reachUsers = users;

          vm.downloadLink = getDownloadLink();
        });
    }

    function removeFood(food) {
      let index = vm.campaign.foods.findIndex(item => item.id === food.id);

      if (index !== -1) {
        vm.campaign.foods.splice(index, 1);
        calculatingReachUser();
      }
    }
  }
})();