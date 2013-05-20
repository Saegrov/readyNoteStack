'use strict';

angular.module('readyNoteStackApp')
  .controller('ProjectsCtrl', function ($scope, Project) {


    $scope.projects = Project.query();


  });
