'use strict';

angular.module('readyNoteStackApp')
  .controller('ProjectsCtrl', function ($scope, Project) {

    $scope.projectName = '';


    //Get the projects
    $scope.projects = Project.query();


    //Create a project
    $scope.createProject = function () {
      $scope.hello = 'Created project!';

      var newProject = new Project({name: $scope.projectName});

      newProject.$save();

      //TODO Need to find a way to update the client side model after project is created!
    };

    //Delete a project
    $scope.deleteProject = function (theProject) {
      console.log('Deleting project : ' + theProject);

      var projectToDelete = Project.get({projectId: theProject});
      projectToDelete.$delete({projectId: theProject});

      //TODO Need to find a way to update the client side model after project is deleted!
    };

    //TODO: Will probably fix with restangular
    //Return
    $scope.nameExists = function () {
      if ($scope.projectName === '') {
        return 'empty';
      }
      return 'success';
    };

  });
