'use strict';

/**
 * @ngdoc function
 * @name videoportalApp.controller:VideoDetailCtrl
 * @description
 * # VideoDetailCtrl
 * Controller of the videoportalApp
 */
angular.module('videoportalApp')
  .controller('VideoDetailCtrl', function (session, $location, Restangular, $scope) {

    // initial conditions for scope variables
    $scope.starRating = 0;
    $scope.readOnly = false;

    var token = session.getToken();
    var url = $location.url();
    var videoId = url.substring(url.lastIndexOf('/') + 1); // get video id from the url and set to a varible

    // restangular request variables
    var oneVideoRequest = Restangular.one('/video');
    var ratingRequest = Restangular.one('/video/ratings');

    // request for getting the specified video with video id
    oneVideoRequest.customGET('', { sessionId: token, videoId: videoId }).then(function (video) {
      if(video.status === "success"){
        $scope.video = video.data;
      }else{
        console.log("Failed loading video!");
      }
    });

    // request for rating the video when user click on the stars
    $scope.rateVideo = function (param) {
      ratingRequest.customPOST(
        {
          videoId: videoId,
          rating: param
        },'', { sessionId: token }).then(function (video) {
          if(video.status === "success"){
            $scope.starRating = param;
            $scope.readOnly = !$scope.readOnly; // change the stars to read-only with users vote in order to prevent rating again
          }else{
            alert("Error rating the video! Please try again.");
          }
      });

    };

  });


