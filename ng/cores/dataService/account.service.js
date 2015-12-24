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

        function postEmail(account){
          return $http.post('/api/accounts', account)
                  .then(postSuccess)
                  .catch(postFailed);

          function postSuccess(res){
            return console.log(res.data);
          };

          function postFailed(res){
            return console.log(res);
          };

        }; 
    };

})();