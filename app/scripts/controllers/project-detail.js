'use strict';

angular.module('readyNoteStackApp')
  .controller('ProjectDetailCtrl', function ($scope, $routeParams, ProjectRestService) {
    $scope.project = ProjectRestService.get({projectId: $routeParams.projectId}, function (project) {
      $scope.tullball = project.name;
    });
  });
