/**
* app.home Module
*
* Description
*/
angular
  .module('pandaApp')
  .controller('HomeController',HomeController)

  function HomeController(){

    var vm = this; 

    vm.timer = "test";

    $(".headline").hide().animate({ left:"0px", opacity:"show"}, 1500);
   
    $(window).scroll(function() {
      $('.hideme').each(function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
         if( bottom_of_window > bottom_of_object ){
            console.log("done")
              $('.hideme').animate({left:200, opacity:"show"}, 1500);              
            }
      })
    });

  };
