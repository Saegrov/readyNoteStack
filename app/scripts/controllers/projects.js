'use strict';

angular.module('readyNoteStackApp')
  .controller('ProjectsCtrl', function ($scope, ProjectRestService) {

    $scope.projectNameInputField = '';


    //Get the projects
    $scope.projects = ProjectRestService.query();


    //Create a project
    $scope.createProject = function () {
      var newProject = new ProjectRestService({name: $scope.projectNameInputField});

      console.log(newProject);

      newProject.$save(function (res, headers) {
        console.log(res);
        console.log(headers());
        $scope.projects.push(res);
        if (res === 1) {
          console.log('ok!');
        }
      });

      //TODO Need to find a way to update the client side model after project is created!
    };

    $scope.deleteProject = function (aProject) {
      console.log('Deleting project: ' + aProject.id);
      aProject.$delete({projectId: aProject.id}, function (res) {
        $scope.projects.splice($scope.projects.indexOf(res), 1);
      });
    };


    //TODO: Will probably fix with restangular
    //Return
    $scope.nameExists = function () {
      if ($scope.projectNameInputField === '') {
        return 'empty';
      }


      for (var i = 0; i < $scope.projects.length; i++) {
        if ($scope.projects[i].name === $scope.projectNameInputField) {
          return 'error';
        }
      }

      return 'success';
    };

  });
