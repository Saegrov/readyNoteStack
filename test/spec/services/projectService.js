'use strict';

describe('Service: projectService', function () {

  // load the service's module
  beforeEach(module('readyNoteStackApp'));

  // instantiate service
  var Project;
  beforeEach(inject(function (_Project_) {
    Project = _Project_;
  }));

  it('should do something', function () {
    expect(!!Project).toBe(true);
  });

});
