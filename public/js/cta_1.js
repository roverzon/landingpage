(function() {
  'use strict';
    _clForm.loadForm("http://host.convertlab.com", "1120b5771f25406bb120f3ceda42ecb6",{
    formInit: function(){
       document.getElementById('clSubmitForm').classList.add('btn');
          document.getElementById('clSubmitForm').classList.add('btn-secondary');
          var d=document.querySelector("input[type=email]");
          d.placeholder = '公司邮箱';
          d.style = 'font-size:20px;';
    },
    beforeSubmit: function(){},
    onSubmit: function(args){}
  });
})();