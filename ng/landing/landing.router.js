(function(){
  'use strict';
  /**
  * app.landing Module
  *
  * Description
  */
    angular
    .module('app.landing')
    .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun( routerHelper ){
      routerHelper.configureState(getStates());
    };

    function getStates(){
      return [
        {
          state: 'landing',
          config: {
              abstract : true,
              templateUrl: './common/content.html'
          }
        }
      ];
    };
})();