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

    NavbarController.$inject = ['$uibModal'];

    function NavbarController($uibModal){
      var vm = this; 
      vm.openRegisterModal = openRegisterModal; 

      function openRegisterModal() {
        return $uibModal.open({
          animation: true,
          templateUrl: 'register.modal.html',
          controller : 'RegisterController',
          controllerAs :'RegisterCtrl',
          size: 'md'
        });

        // modalInstance.result.then(function () {
        //   console.log("close");
        // });


      };
    };

})();