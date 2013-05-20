'use strict';

angular.module('readyNoteStackApp')
  .controller('ProjectsCtrl', function ($scope, projectService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.projects = projectService.query();


  });
