(function () {
  'use strict';

  angular
    .module('core')
    .controller('DashboardController', Controller);

  Controller.$inject = ['$scope', 'Authentication', 'Socket'];

  /* @ngInject */
  function Controller($scope, Authentication, Socket) {
    var vm = this;

    activate();

    function activate() {
      alert(`Hello Wellcome ${Authentication.user.username} To Dashboard !!`);

      Socket.connect('/chatroom');

      Socket.on('connect', function () {
        alert('Socket Connected Completed.');
      });

      Socket.on('message', function (message) {
        alert('You got new message from server ' + message);
      });
    }

    // Remove the event listener when the controller instance is destroyed
    $scope.$on('$destroy', function () {
      Socket.removeListener('message');
      
      // Must call that for server remove connection.
      Socket.close();
    });
  }
})();
