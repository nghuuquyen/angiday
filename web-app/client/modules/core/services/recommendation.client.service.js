(function () {
  'use strict';

  angular
    .module('core')
    .factory('RecomendationService', Service);

  Service.$inject = ['$resource', 'Host'];

  /* @ngInject */
  function Service($resource, Host) {
    const apiGateway = Host.getApiGateway();

    return $resource('', {}, {
      getFoodNewFeeds: {
        method: 'GET',
        isArray: true,
        url: apiGateway + '/user/food-new-feeds/:userId'
      },
      getSimilarFoodByFood: {
        method: 'GET',
        isArray: true,
        url: apiGateway + '/user/similar-food-by-food/:foodId'
      },
      getTopPopularFoods: {
        method: 'GET',
        isArray: true,
        url: apiGateway + '/user/top-popular-foods'
      },
      getUserRecommedationFoods: {
        method: 'GET',
        isArray: true,
        url: apiGateway + '/user/user-recommedation-foods/:userId'
      },
      getAllCollections: {
        method: 'GET',
        isArray: true,
        url: apiGateway + '/collection'
      },
      getFoodDetail: {
        method: 'GET',
        isArray: true,
        url: apiGateway + '/food/get-food-detail'
      }
    });
  }
})();