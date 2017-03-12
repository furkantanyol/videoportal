'use strict';

/**
 * @ngdoc function
 * @name videoportalApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the videoportalApp
 */
angular.module('videoportalApp')
  .controller('LoginCtrl', function ($scope, Restangular, $location, session) {

    // Save function handling the login with a Restangular Post request and save sessionId as token
    $scope.save = function () {
      var token = '';
      var loginRequest = Restangular.one('/user/auth');  // http://localhost:3000/user/auth
      loginRequest.customPOST(
        {
          username: $scope.user.username,
          password: $scope.user.password
        }).then(function (data) {
          if(data.status === "success"){
            // save sessionId as token
            token = data.sessionId;
            // save token to the session service
            session.setToken(token);
            // save token to the local storage
            session.saveTokenToStorage(token);
            // (optional) set default headers with the token
            Restangular.setDefaultHeaders({ Authorization: "Bearer " + session.getToken() });
            // redirect to video portal
            $location.path('/');
          }else{
            alert("User not found. Please sign up first!");
              // reset value of the input
              document.getElementById('username').value = "";
              document.getElementById('password').value = "";
          }
      });
    };
  });
