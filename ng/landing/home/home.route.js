(function(){
  'use strict';
  /**
  * landing.home Module
  *
  * Description
  */
  angular
    .module('landing.home')
    .run(appRun);

    /* @ngInject */

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureState(getStates(),'/');
    };

    function getStates() {
        return [
            {
                state: 'landing.home',
                config: {
                    templateUrl: 'panda-home.html',
                    url: '/',
                    controller : 'HomeController',
                    controllerAs : 'HomeCtrl',
                    title : '首页'
                }
            }
        ];
    };

})();