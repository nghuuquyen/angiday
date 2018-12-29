(function () {
  'use strict';

  angular
    .module('core')
    .controller('CoreController', ControllerController);

  ControllerController.$inject = [
    '$rootScope', 'UserTrackingService', 'Authentication', 'Utilities', 'SearchTrackingService'
  ];
  function ControllerController($rootScope, UserTrackingService,
    Authentication, Utilities, SearchTrackingService) {
    var vm = this;

    let searchTracking = Utilities.sessionStorageManager.getValue('search_id');

    if (searchTracking && Authentication.user) {
      searchTracking.user = Authentication.user.id;
    }

    $rootScope.keywordTracking = function (keywordId, actionType) {
      if (Authentication.user) {
        UserTrackingService.keywordInteractiveLog({
          user: Authentication.user.id,
          keyword: keywordId,
          actionType: actionType
        });
      }

      if (searchTracking) {
        if(!searchTracking.keywords) searchTracking.keywords = [];

        searchTracking.keywords.push(keywordId);
        SearchTrackingService.update({ id: searchTracking.id }, searchTracking)
          .$promise.then(track => {
            Utilities.sessionStorageManager.setValue('search_id', track);
          });
      }
    };

    $rootScope.foodTracking = function (foodId, actionType) {
      if (Authentication.user) {
        UserTrackingService.foodInteractiveLog({
          user: Authentication.user.id,
          food: foodId,
          actionType: actionType
        });
      }

      if (searchTracking) {
        if(!searchTracking.foods) searchTracking.foods = [];

        searchTracking.foods.push(foodId);
        SearchTrackingService.update({ id: searchTracking.id }, searchTracking)
          .$promise.then(track => {
            Utilities.sessionStorageManager.setValue('search_id', track);
          });
      }
    };
  }
})();