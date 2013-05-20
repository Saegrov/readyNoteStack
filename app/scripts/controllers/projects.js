'use strict';

angular.module('readyNoteStackApp')
  .controller('ProjectsCtrl', function ($scope, $resource) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.Project = $resource('/projects/:projectId', {},
      {'query': {method: 'GET', isArray: true}});


    $scope.listProjects = $scope.Project.query();

  });
