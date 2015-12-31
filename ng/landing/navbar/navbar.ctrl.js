(function(){
  'use strict';

  /**
  * landing.navbar Module
  *
  * Description
  */
  angular
    .module('landing.navbar')
    .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$uibModal','$window','$scope','$translate'];

    function NavbarController($uibModal, $window,$scope, $translate){
      var vm = this; 
      vm.scroll = false;
      vm.text = "hello go go";
      vm.openRegisterModal = openRegisterModal; 

      function openRegisterModal() {
        return $uibModal.open({
          animation: true,
          templateUrl: 'register.modal.html',
          controller : 'RegisterController',
          controllerAs :'RegisterCtrl',
          size: 'md'
        });
      };

      $translate('TITLE').then(function (title) {
          console.log(title);
      });

      $("#try").on("scrollstart",function(){
        alert("Started scrolling!");
      });

      // angular.element($window).bind("scroll", function(e) {
      //   $scope.$apply(function(){
      //     vm.scroll = true;
      //   })
      //   console.log("start to scroll") 
      // });


    };

})();