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
        .state('about',{
          url :"/about",
          templateUrl:'panda-about.html',
          controller: 'AboutController',
          controllerAs : 'AboutCtrl'
        })
        .state('careers',{
          url : "/careers/:id",
          templateUrl : 'panda-career.html',
          controller : 'CareerController',
          controllerAs : 'CareerCtrl'
        })
        .state('signup',{
          url : "/signup",
          templateUrl : 'panda-signup.html'
        })

      // $locationProvider.html5Mode({
      //   enabled: true,
      //   requireBase: false
      // });

      $urlRouterProvider.otherwise('/');
};
