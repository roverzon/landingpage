(function(){
  'use strict';
    _clForm.loadForm("http://host.convertlab.com", "bbb97a4fa3a942709571d7ec3f353188",{
    formInit: function(){
       document.getElementById('clSubmitForm').classList.add('btn');
        document.getElementById('clSubmitForm').classList.add('btn-warning');
        document.getElementById('formFieldSet').style.padding = 0;
        var d = document.querySelector("input[type=email]");
        d.placeholder = '公司邮箱';
        d.style = 'font-size:20px;';
    },
    beforeSubmit: function(){},
    onSubmit: function(args){}
  });
})();