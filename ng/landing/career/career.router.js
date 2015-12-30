(function(){
  'use strict';
  
  /**
  * app.career Module
  *
  * Description
  */
  angular
    .module('landing.career')
    .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun( routerHelper ){
      routerHelper.configureState(getStates());
    };

    function getStates(){
      return [
        {
          state: 'landing.careers',
          config: {
              templateUrl: 'panda-career.html',
              url: '/careers/:id',
              title : '職涯'
          }
        }
      ];
    };

})();