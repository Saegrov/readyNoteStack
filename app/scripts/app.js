'use strict';

angular.module('readyNoteStackApp', ['ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/projects/:projectId', {
        templateUrl: 'views/project-detail.html',
        controller: 'ProjectDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
