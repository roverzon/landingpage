(function(){
  'use strict';
  /**
  * app.core Module
  *
  * Description
  */
  angular
    .module('app.core')
    .factory('AccountService',AccountService);

    AccountService.$inject = ['$http'];

    function AccountService($http){
        return {
          postAccount : postAccount
        };

        function postAccount(account){
          return $http.post('http://host.51convert.cn/page/f45c9e364a0e4a82ab82dbf1049deb1b', account)
                  .then(postSuccess)
                  .catch(postFailed);

          function postSuccess(res){
            return res.data;
          };

          function postFailed(res){
            return console.log(res);
          };

        }; 
    };

})();