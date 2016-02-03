(function(){
  'use strict';
    _clForm.loadForm("http://host.51convert.cn", "1c0dc3ccd5d54b42a00a5463ea291d52",{
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