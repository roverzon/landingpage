(function(){
  'use strict';
  /**
  * app Module
  *
  * Description
  */
  angular
    .module('pandaApp')
    .config(appConfig);

    appConfig.$inject = ['$translateProvider'];

    function appConfig($translateProvider){
      $translateProvider.translations('en', {
        TITLE: 'MarketPanda'
      });

      $translateProvider.translations('zh-t',{
        TITLE: '市場熊貓'
      });

      $translateProvider.translations('zh-s',{
        TITLE: '市场熊猫'
      });
    };

})();