(function(){
  'use strict';

  /**
  * app.navbar Module
  *
  * Description
  */
  angular
    .module('app.navbar')
    .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$uibModal','$window','$scope'];

    function NavbarController($uibModal, $window,$scope){
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