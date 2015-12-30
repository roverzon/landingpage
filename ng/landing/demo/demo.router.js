(function(){
  'use strict';
  /**
  * landing.demo Module
  *
  * Description
  */
  angular
    .module('landing.demo')
    .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper){
      routerHelper.configureState(getStates());
    };

   function getStates() {
        return [
            {
                state: 'landing.demo',
                config: {
                    templateUrl: 'panda-demo.html',
                    url: '/demo',
                    controller : 'DemoController',
                    controllerAs : 'DemoCtrl',
                    title : '演示'
                }
            }
        ];
    };


})();