'use strict';

/**
 * @ngdoc function
 * @name videoportalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the videoportalApp
 */
angular.module('videoportalApp')
  .controller('MainCtrl', function (session, $scope, Restangular) {
    
    var token = session.getToken();
    var skip = 0;   // defining skip & limit for video requests
    var limit = 10;
    $scope.videos = [];  

    // Restangular request variables
    var logoutRequest = Restangular.one('/user/logout');
    var videoRequest = Restangular.all('/videos');
    
    
    function getVideos(skip,limit){
      videoRequest.customGET('', { sessionId: token, skip: skip, limit: limit}).then(function (videos) {
        // console.log(videos.status);
        if(videos.status === "success"){
          // console.log(videos.data);
          $scope.videos = $scope.videos.concat(videos.data);
          // Hide the spinner when data loaded
          $('#loading').hide();
        }else{
          console.log("Failed loading videos!");
        }
      });
    }
    
    // Scroll to top when portal opened
    $(window).scrollTop();

    // get first 10 videos for the portal when it first opened
    getVideos(skip,limit);

    // load more videos when scrolled to bottom of the screen
    $(window).scroll(function(){
      if($(window).scrollTop() === $(document).height() - $(window).height()){
        $('#loading').show(); // show spinner on load
        skip += 10;  // skip the loaded videos when scrolled
        getVideos(skip,limit);
      }
    });

    // logout function with the logout request
    $scope.logoutUser = function () {
      logoutRequest.customGET('',{ sessionId: token }).then(function (data) {
        if(data.status === "success"){
          // set session token to null and erase localstorage after logout
          session.setToken(null);
          localStorage.clear();
          window.location.reload();  // reload screen after logout
        }else{
          alert("Error logging out! Please try again.");
        }
      });
    };

    // function for getting the average of the ratings array in the videos to show in the portal
    $scope.getAverageRating = function (ratings) {
      var total = 0;
      for(var i = 0; i < ratings.length; i++) {
        total += ratings[i];
      }
     return Math.round(total / ratings.length);
    };

  });

// Play only one video at a time and pause others
document.addEventListener('play', function(e){
  var videos = document.getElementsByTagName('video');
  for(var i = 0, len = videos.length; i < len;i++){
    if(videos[i] !== e.target){
      videos[i].pause();
    }
  }
}, true);
