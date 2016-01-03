(function(){
  'use strict';

  /**
  * landing.home Module
  *
  * Description
  */
  angular
    .module('landing.about')
    .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun( routerHelper ){
      routerHelper.configureState(getStates());
    }

    function getStates() {
        return [
            {
                state: 'landing.about',
                config: {
                    templateUrl: 'panda-about.html',
                    url: '/about',
                    controller : 'AboutController',
                    controllerAs : 'AboutCtrl',
                    title : '关於我们'
                }
            }
        ];
    };
    
})();
