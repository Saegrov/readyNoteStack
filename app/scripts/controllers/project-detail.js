'use strict';

angular.module('readyNoteStackApp')
  .controller('ProjectDetailCtrl', function ($scope, $routeParams, Project) {
    $scope.project = Project.get({projectId: $routeParams.projectId}, function(project) {
      $scope.tullball = project.name;
    });
  });
