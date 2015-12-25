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
    vm.submit = submit;
    
    
    $(".headline").hide().animate({ left:"0px", opacity:"show"}, 1500);

    function submit(){
      return AccountService.postAccount(vm.account);
    };

    
  };

})();