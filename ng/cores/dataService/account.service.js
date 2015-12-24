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
          postEmail : postEmail
        };

        function postEmail(mail){
          return $http.post('/api/accounts', mail)
                  .then(postSuccess)
                  .catch(postFailed);

          function postSuccess(res){
            return console.log(res);
          };

          function postFailed(res){
            return console.log(res);
          };

        }; 
    };

})();