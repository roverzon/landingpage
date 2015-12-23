/**
* pandaApp Module
*
* Description
*/
angular
  .module('pandaApp')
  .controller('AboutController',AboutController)

  function AboutController(){
    var vm = this; 
    var top = $("#career").offset().top  - 3.5*parseFloat($('#career').css('marginTop').replace(/auto/,0));
    $('#joinus').click(function () {
        $('html,body').animate({scrollTop:top}, 500);
    });
  };
