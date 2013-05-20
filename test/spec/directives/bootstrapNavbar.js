'use strict';

describe('Directive: bootstrapNavbar', function () {
  var element, scope;

  beforeEach(module('readyNoteStackApp'));

  beforeEach(module('views/navbar.html'));

  beforeEach(inject(function ($rootScope, $compile) {
    element = angular.element('<bootstrap-navbar></bootstrap-navbar>');
    scope = $rootScope;

    $compile(element)(scope);
    scope.$digest();

  }));


  it('should contain 3 clickable navigation items', inject(function ($compile, $rootScope) {
    var navigations = element.find('li');
    expect(navigations.length).toBe(3);
    expect(navigations.eq(0).text()).toBe("Home");
    expect(navigations.eq(1).text()).toBe("Projects");
    expect(navigations.eq(2).text()).toBe("Issues");

  }));

});
