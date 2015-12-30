(function(){
  'use strict';

  /**
  * landing.feature Module
  *
  * Description
  */
   angular
    .module('landing.feature')
    .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun( routerHelper ){
      routerHelper.configureState(getStates());
    };

    function getStates(){
      return [
        {
          state: 'landing.feature',
          config: {
              templateUrl: 'panda-feature.html',
              url: '/features',
              title : '產品特色'
          }
        }
      ];
    };

})();