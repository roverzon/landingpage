/**
* panadaApp Module
*
* Description
*/
angular
  .module('pandaApp')
  .controller('CareerController',CareerController);

  CareerController.$inject = ['$stateParams','$q'];

  function CareerController($stateParams){
    var vm = this; 
    vm.careerId = $stateParams.id;


  };


