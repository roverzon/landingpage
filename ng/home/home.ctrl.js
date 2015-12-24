(function(){
  /**
* app.home Module
*
* Description
*/
angular
  .module('app.home')
  .controller('HomeController',HomeController)

  function HomeController(){
    var vm = this; 
    vm.timer = "test";
    $(".headline").hide().animate({ left:"0px", opacity:"show"}, 1500);
  };

})();
