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
    vm.account = {};
    vm.postEmail = postEmail;
    $(".headline").hide().animate({ left:"0px", opacity:"show"}, 1500);

    function postEmail(){
      return AccountService.postEmail(vm.account);
    };
  };

})();