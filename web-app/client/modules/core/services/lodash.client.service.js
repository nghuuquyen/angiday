/**
* @module services 
* @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>> on 12/11/2017.
*/
(function () {
  'use strict';

  angular
    .module('core')
    .service('_', factory);

  factory.$inject = ['$window'];

  /* @ngInject */
  function factory($window) {
    return $window._;
  }
})();
