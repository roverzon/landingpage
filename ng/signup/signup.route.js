(function(){
  'use strict';
  /**
  * landing.signup Module
  *
  * Description
  */

  angular
    .module('app.signup')
    .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun( routerHelper ){
      routerHelper.configureState(getStates());
    };

    function getStates() {
        return [
            {
                state: 'signup',
                config: {
                    templateUrl: 'panda-signup.html',
                    url: '/signup',
                    controller : 'SignupController',
                    controllerAs : 'SignupCtrl',
                    title : '注册'
                }
            }
        ];
    };

})();