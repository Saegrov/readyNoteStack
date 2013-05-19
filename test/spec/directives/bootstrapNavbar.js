'use strict';

describe('Directive: bootstrapNavbar', function () {
  beforeEach(module('readyNoteStackApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<bootstrap-navbar></bootstrap-navbar>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the bootstrapNavbar directive');
  }));
});
