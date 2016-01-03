(function(){
  'use strict';
  /**
  * landing.demo Module
  *
  * Description
  */
  angular
    .module('app.demo')
    .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper){
      routerHelper.configureState(getStates());
    };

   function getStates() {
        return [
            {
                state: 'demo',
                config: {
                    templateUrl: 'panda-demo.html',
                    url: '/demo',
                    controller : 'DemoController',
                    controllerAs : 'DemoCtrl',
                    title : '请求演示'
                }
            }
        ];
    };


})();