(function () {
  'use strict';

  // Create the Socket.io wrapper service
  angular
    .module('core')
    .factory('Socket', Socket);

  Socket.$inject = ['Authentication', '$timeout'];

  function Socket(Authentication, $timeout) {
    var service = {
      connect: connect,
      emit: emit,
      on: on,
      removeListener: removeListener,
      close: close,
      socket: null
    };

    return service;

    // Connect to Socket.io server
    function connect(path) {
      // Connect only when authenticated
      if (Authentication.user) {
        service.socket = io(path || '/', { transports: ['websocket'] });
      }
    }

    // Wrap the Socket.io 'emit' method
    function emit(eventName, data) {
      if (service.socket) {
        service.socket.emit(eventName, data);
      }
    }

    // Wrap the Socket.io 'on' method
    function on(eventName, callback) {
      if (service.socket) {
        service.socket.on(eventName, function (data) {
          $timeout(function () {
            callback(data);
          });
        });
      }
    }

    // Wrap the Socket.io 'removeListener' method
    function removeListener(eventName) {
      if (service.socket) {
        service.socket.removeListener(eventName);
      }
    }

    function close() {
      if (service.socket) {
        service.socket.close();
      }
    }
  }
}());
