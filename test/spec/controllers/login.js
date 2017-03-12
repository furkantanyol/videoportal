'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('videoportalApp'));

  var LoginCtrl, Restangular, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _Restangular_) {
    scope = $rootScope.$new();
    Restangular = _Restangular_;

    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('valid login', function() {
    var username = "ali";
    var password = "password";
    var loginRequest = Restangular.one('/user/auth');
    loginRequest.customPOST(
      {
        username: username,
        password: password
      }).then(function (data) {
      expect(data.status).toBe("success");
    });
  });

  it('invalid login', function() {
    var username = "jim";
    var password = "123";
    var loginRequest = Restangular.one('/user/auth');
    loginRequest.customPOST(
      {
        username: username,
        password: password
      }).then(function (data) {
      expect(data.status).not.toBe("success");
    });
  });

});
