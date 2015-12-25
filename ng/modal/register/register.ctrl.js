(function(){
  'use strict';

  /**
  * app.register Module
  *
  * Description
  */
  angular
    .module('app.register')
    .controller('RegisterController',RegisterController);

    RegisterController.$inject = ['AccountService','$uibModalInstance'];

    function RegisterController(AccountService,$uibModalInstance){
      var vm = this; 
      vm.account = {};
      vm.submitAccount = submitAccount;
      vm.cancel = cancel; 

      function submitAccount(){
       
        AccountService.postAccount(vm.account).then(function(res){
          if (res) {
            $uibModalInstance.dismiss('cancel');
          };
        });
      };

      function cancel(){
        $uibModalInstance.dismiss('cancel');
      };
    };

})();