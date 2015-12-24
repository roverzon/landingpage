(function(){
  'use strict';

  /**
  * app.home Module
  *
  * Description
  */
  angular
    .module('app.about')
    .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun( routerHelper ){
      routerHelper.configureState(getStates());
    }

    function getStates() {
        return [
            {
                state: 'about',
                config: {
                    templateUrl: 'panda-about.html',
                    url: '/about',
                    controller : 'AboutController',
                    controllerAs : 'AboutCtrl',
                    title : '關於我們'
                }
            }
        ];
    };
    
})();