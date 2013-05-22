'use strict';

angular.module('readyNoteStackApp')
  .factory('ProjectRestService', function ($resource) {
    return $resource('projects/:projectId', {}, {
      get: {method: 'GET', params: {projectId: 'projects'}, isArray: false},
      del: {method: 'DELETE', params: {projectId: 'projects'}, isArray: false}
    });
  });
