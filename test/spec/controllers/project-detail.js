'use strict';

describe('Controller: ProjectDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('readyNoteStackApp'));

  var ProjectDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectDetailCtrl = $controller('ProjectDetailCtrl', {
      $scope: scope
    });
  }));

});
