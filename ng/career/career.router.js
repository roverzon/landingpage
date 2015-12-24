(function(){
  'use strict';
  
  /**
  * app.career Module
  *
  * Description
  */
  angular
    .module('app.career')
    .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun( routerHelper ){
      routerHelper.configureState(getStates());
    };

    function getStates(){
      return [
        {
          state: 'careers',
          config: {
              templateUrl: 'panda-career.html',
              url: '/careers/:id',
              title : '職涯'
          }
        }
      ];
    };

})();