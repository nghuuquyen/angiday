/**
* Created by Quyen Nguyen Huu on 12/11/2017.
* Email : nghuuquyen@gmail.com
*/
(function () {
  'use strict';

  // Authentication service for user variables

  angular
  .module('core')
  .factory('Authentication', Authentication);

  Authentication.$inject = ['$window'];

  function Authentication($window) {
    var auth = {
      user: angular.copy($window.user)
    };

    return auth;
  }
}());
