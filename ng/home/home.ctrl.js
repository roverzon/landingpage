(function(){
  /**
* app.home Module
*
* Description
*/
angular
  .module('app.home')
  .controller('HomeController',HomeController)

  HomeController.$inject = ['AccountService'];

  function HomeController(AccountService){
    var vm = this; 
    vm.email = 'roverzon@gmail.com';
    vm.postEmail = postEmail;
    $(".headline").hide().animate({ left:"0px", opacity:"show"}, 1500);

    function postEmail(email){
      return AccountService.postEmail(vm.email);
    };
  };

})();