(function() {
  'use strict';
  window.callback = function(){ console.log("yoyo") }; 
  _clForm.loadForm("http://host.51convert.cn", "f45c9e364a0e4a82ab82dbf1049deb1b",{
      formInit: function(){
          document.getElementById('clSubmitForm').classList.add('btn');
          document.getElementById('clSubmitForm').classList.add('btn-secondary');
          var d=document.querySelector("input[type=email]");
          d.placeholder = '公司邮箱 =)';
          d.style = 'font-size:20px;';
      },
      beforeSubmit: function(){},
      onSubmit: function(args){
          console.log(args);
          window.callback();
      }
  });
})();