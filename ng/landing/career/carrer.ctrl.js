(function(){
  'use strict';
    /**
  * panadaApp Module
  *
  * Description
  */
  angular
    .module('landing.career')
    .controller('CareerController',CareerController);

    CareerController.$inject = [];

    function CareerController(){
      var vm = this; 
      // vm.careerId = $stateParams.id;
      console.log("it is career page");
    };

})();


