(function(){
  'use strict';

  /**
  * blocks.router Module
  *
  * Description
  */
  angular
    .module('blocks.router')
    .provider('routerHelper',routerHelperProvider);

    routerHelperProvider.$inject = ['$locationProvider','$stateProvider','$urlRouterProvider'];

  function routerHelperProvider($locationProvider,$stateProvider,$urlRouterProvider){

    var config = {
      docTitle : 'ConvertLab'
    }

    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });

    this.$get = RouterHelper;

    RouterHelper.$inject = ['$state','$rootScope'];

    function RouterHelper($state, $rootScope){
      var hasOtherwise = false; 

      var service = {
        configureState : configureState,
        getStates : getStates
      };

      init();

      return service;

      function configureState(states, otherwisePath){
        states.forEach(function(state){
          $stateProvider.state(state.state,state.config);
        });

        if ( otherwisePath && !hasOtherwise) {
          hasOtherwise = true; 
          $urlRouterProvider.otherwise(otherwisePath);
        };
      };
      function getStates(){ return $state.get()};

      function init(){
        updateDocTitle();
      };

      function updateDocTitle(){
        $rootScope.$on('$stateChangeSuccess',
          function(event, toState, toParams, fromState, fromParams){
            var title = config.docTitle + ' | ' + (toState.title || '');
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            $rootScope.title = title;
          });
      };
    };
  };

})();
