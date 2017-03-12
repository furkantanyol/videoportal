'use strict';

/**
 * @ngdoc overview
 * @name videoportalApp
 * @description
 * # videoportalApp
 *
 * Main module of the application.
 */
angular
  .module('videoportalApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
  ])

  .run(function (Restangular, session, $location) {
    // Set base url of the api for Restangular requests
    Restangular.setBaseUrl('http://localhost:3000');

    // check token & route user accordingly
    if(!session.checkToken()){
      $location.path('/login');
    }else{
      $location.path('/');
    }
  })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/:id', {
        templateUrl: 'views/video-detail.html',
        controller: 'VideoDetailCtrl',
        controllerAs: 'videoDetail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
