'use strict';

describe('Controller: VideoDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('videoportalApp'));

  var VideoDetailCtrl, Restangular,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _Restangular_) {
    scope = $rootScope.$new();
    Restangular = _Restangular_;
    VideoDetailCtrl = $controller('VideoDetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('get single video', function () {
    var oneVideoRequest = Restangular.one('/video');
    var token = "12345";
    var videoId = "12345";
    oneVideoRequest.customGET('', { sessionId: token, videoId: videoId }).then(function (video) {
      expect(video.status).toBe("success");
    });
  });

  it('rate video', function () {
    var ratingRequest = Restangular.one('/video/ratings');
    var token = "12345";
    var videoId = "12345";
    var param = 5;
    ratingRequest.customPOST(
      {
        videoId: videoId,
        rating: param
      },'', { sessionId: token }).then(function (video) {
      expect(video.status).toBe("success");
    });
  });

  it('initial star rating before rating', function () {
    expect(scope.starRating).toBe(0);
  });
  
});
