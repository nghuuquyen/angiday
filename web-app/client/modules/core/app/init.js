'use strict';


//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName)
  .config(['$locationProvider', '$httpProvider', '$logProvider',
    function ($locationProvider, $httpProvider, $logProvider) {
      $httpProvider.defaults.withCredentials = true;
      
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      }).hashPrefix('!');
    }
  ]);

angular.module(ApplicationConfiguration.applicationModuleName)
  .run(function ($rootScope, $state, Authentication, $transitions, $exceptionHandler) {

    $transitions.onStart({}, function ($transition) {
      var toState = $transition.to();
      var toParams = $transition.params("to");

      if (toState.data && toState.data.roles && toState.data.roles.length > 0) {
        var allowed = false;

        if (toState.data.roles.indexOf("guest") !== -1) {
          allowed = true;
        } else {
          toState.data.roles.forEach(function (role) {
            if (Authentication.user.roles !== undefined && Authentication.user.roles.indexOf(role) !== -1) {
              allowed = true;
              return true;
            }
          });
        }


        if (!allowed) {
          if (Authentication.user !== undefined && typeof Authentication.user === 'object') {
            return $transition.router.stateService.target('forbidden');
          } else {
            return $state.go('authentication.signin').then(function () {
              storePreviousState(toState, toParams);
            });
          }
        }
      }
    });

    $transitions.onError({}, function (trans) {
      var err = trans.error();
      if (err) {
        console.error(err);
      }
    });

    $transitions.onSuccess({}, function ($transition) {
      var fromParams = $transition.params("from");
      var fromState = $transition.from();
      var toState = $transition.to();

      storePreviousState(fromState, fromParams);
    });

    $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
      var destination = (current && (current.title || current.name || current.loadedTemplateUrl)) ||
        'unknown target';
      var msg = 'Error routing to ' + destination + '. ' + (rejection.msg || '');
      console.warning(msg, [current]);
    });

    // Store previous state
    function storePreviousState(state, params) {
      // only store this state if it shouldn't be ignored
      if (!state.data || !state.data.ignoreState) {
        $state.previous = {
          state: state,
          params: params,
          href: $state.href(state, params)
        };
      }
    }
  });

//Then define the init function for starting up the application
angular.element(document).ready(function () {
  //Fixing facebook bug with redirect
  if (window.location.hash && window.location.hash === '#_=_') {
    if (window.history && history.pushState) {
      window.history.pushState('', document.title, window.location.pathname);
    } else {
      // Prevent scrolling by storing the page's current scroll offset
      var scroll = {
        top: document.body.scrollTop,
        left: document.body.scrollLeft
      };
      window.location.hash = '';
      // Restore the scroll offset, should be flicker free
      document.body.scrollTop = scroll.top;
      document.body.scrollLeft = scroll.left;
    }
  }

  //Then init the app
  angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});
