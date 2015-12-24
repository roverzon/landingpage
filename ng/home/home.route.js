(function(){
  'use strict';
  /**
  * app.home Module
  *
  * Description
  */
  angular
    .module('app.home')
    .run(appRun);

    /* @ngInject */

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureState(getStates(),'/');
    };

    function getStates() {
        return [
            {
                state: 'home',
                config: {
                    templateUrl: 'panda-home.html',
                    url: '/',
                    controller : 'HomeController',
                    controllerAs : 'HomeCtrl',
                    title : '首頁'
                }
            }
        ];
    };

})();