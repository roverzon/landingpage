(function(){
  'use strict';

  /**
  * landing.signup Module
  *
  * Description
  */
  angular
    .module('app.signup')
    .controller('SignupController',SignupController);

    SignupController.$inject = ['AccountService'];

    function SignupController(AccountService){

    };
})();