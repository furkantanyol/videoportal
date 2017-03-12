'use strict';

/**
 * @ngdoc service
 * @name videoportalApp.session
 * @description
 * # session
 * Service in the videoportalApp.
 */
angular.module('videoportalApp')
  .service('session', function () {
    var token = "";
    // Check Token
    this.checkToken = function () {
      var hasToken = false;
      if(this.token !== null && this.token !== "" && this.token !== "undefined" && this.token !== undefined ){
        hasToken = true;
        // User has token
      }else{
        if(localStorage.getItem("token") !== null && localStorage.getItem("token") !== "" && localStorage.getItem("token") !== "undefined" && localStorage.getItem("token") !== undefined){
          hasToken = true;
          // User has token in storage
        }else{
          hasToken = false;
          // User doesn't have token !
        }
      }
      return hasToken;
    };
    // Save Token To Storage
    this.saveTokenToStorage = function(token){
      localStorage.setItem("token", token);
    };
    // Get Token
    this.getToken = function(){
      if(this.token !== null && this.token !== "" && this.token !== "undefined" && this.token !== undefined){
        return this.token;
      }else{
        return localStorage.getItem("token");
      }
    };
    // Set Token
    this.setToken = function(urlToken){
      this.token = urlToken;
    };
  });
