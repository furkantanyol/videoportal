'use strict';

describe('Service: session', function () {

  // load the service's module
  beforeEach(module('videoportalApp'));

  // instantiate service
  var session;
  beforeEach(inject(function (_session_) {
    session = _session_;
  }));

  it('setting and getting the token', function () {
    var token = '12345';
    session.setToken(token);
    expect(session.getToken()).toBe(session.token);
  });

  it('get null if token did not set', function () {
    // var token = '12345';
    // session.setToken(token);
    expect(session.getToken()).toBe(null);
  });

  it('has token', function () {
    var token = '12345';
    session.setToken(token);
    expect(session.checkToken()).toBe(true);
  });

  it('does not have token', function () {
    // var token = '12345';
    // session.setToken(token);
    expect(session.checkToken()).toBe(false);
  });

  it('save token to local storage & get token from local storage', function () {
    var token = '12345';
    session.saveTokenToStorage(token);
    expect(localStorage.getItem("token")).toBe(token);
  });

});
