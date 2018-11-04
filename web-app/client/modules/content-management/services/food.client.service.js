/**
* @module services 
* @name ShopService
* @description API serice for CRUD on Food object.
* @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>> at 28/7/2018
*/
(function () {
  'use strict';

  angular
    .module('content-management')
    .factory('FoodService', Service);

  Service.$inject = ['$resource', 'Host'];

  /* @ngInject */
  function Service($resource, Host) {
    const apiGateway = Host.getApiGateway();

    return $resource(apiGateway + '/food/:id', { id: '@id' }, {
      update: {
        method: 'PATCH'
      },
      /**
       * @name search
       * @description
       * Search food by name and limit offset.
       */
      search: {
        method: 'GET',
        isArray: true,
        url: apiGateway + '/food/search'
      },
      /**
       * @name removeKeyword
       * @description
       * Remove one keyword in food keyword collection.
       * 
       * @path DELETE /food/remove-keyword
       *
       * @query {String} keyword_id  - Keyword id
       * @query {String} food_id     - food id
       */
      removeKeyword: {
        method: 'DELETE',
        url: apiGateway + '/food/remove-keyword'
      },
      /**
       * @name removeShop
       * @description
       * Remove one shop in food shop collection.
       * 
       * @path DELETE /food/remove-shop
       *
       * @query {String} shop_id     - Keyword id
       * @query {String} food_id     - food id
       */
      removeShop: {
        method: 'DELETE',
        url: apiGateway + '/food/remove-shop'
      }
    });
  }
})();