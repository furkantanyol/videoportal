'use strict'

describe('Testing routes', function() {
  beforeEach(module('videoportalApp'));

  var location, route, rootScope;

  beforeEach(inject(
    function( _$location_, _$route_, _$rootScope_ ) {
      location = _$location_;
      route = _$route_;
      rootScope = _$rootScope_;
    }));

  describe('Login route', function() {
    beforeEach(inject(
      function($httpBackend) {
        $httpBackend.expectGET('login')
          .respond(200);
      }));

    it('should load the login page on successful load of /login', function() {
      location.path('/login');
      rootScope.$digest();
      expect(route.current.controller).toBe('LoginCtrl')
    });
  });

  describe('Video Detail route', function() {
    beforeEach(inject(
      function($httpBackend) {
        $httpBackend.expectGET('videoDetail')
          .respond(200);
      }));

    it('should load the video detail page on successful load of /video-detail', function() {
      location.path('/video-detail');
      rootScope.$digest();
      expect(route.current.controller).toBe('VideoDetailCtrl')
    });
  });

  describe('Main route', function() {
    beforeEach(inject(
      function($httpBackend) {
        $httpBackend.expectGET('main')
          .respond(200);
      }));

    it('should load the main page on successful load of /', function() {
      location.path('/');
      rootScope.$digest();
      expect(route.current.controller).toBe('MainCtrl')
    });
  });
});
