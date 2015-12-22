/**
* app Module
*
* Description
*/
angular
  .module('pandaApp', ['ui.router'])
  .config(appConfig);

  appConfig.$inject = ['$stateProvider','$urlRouterProvider', '$locationProvider'];

  function appConfig($stateProvider,$urlRouterProvider,$locationProvider){
      $stateProvider
        .state('home',{
            url : "/",
            templateUrl:'panda-home.html',
            controller: 'HomeController',
            controllerAs :'HomeCtrl'
        })

   $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
};
