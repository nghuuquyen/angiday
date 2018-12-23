(function () {
  'use strict';

  angular
    .module('core')
    .controller('CoreController', ControllerController);

  ControllerController.$inject = [
    '$rootScope', 'UserTrackingService', 'Authentication'
  ];
  function ControllerController($rootScope, UserTrackingService, Authentication) {
    var vm = this;

    $rootScope.keywordTracking = function (keywordId, actionType) {
      if (Authentication.user) {
        UserTrackingService.keywordInteractiveLog({
          user: Authentication.user.id,
          keyword: keywordId,
          actionType: actionType
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
    };
  }
})();