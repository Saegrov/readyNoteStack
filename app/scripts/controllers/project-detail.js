'use strict';

angular.module('readyNoteStackApp')
  .controller('ProjectDetailCtrl', function ($scope, $routeParams, projectService) {
    $scope.project = projectService.get({projectId: $routeParams.projectId}, function(project) {
      $scope.tullball = project.name;
    });
  });
