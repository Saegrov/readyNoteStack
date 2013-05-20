'use strict';

angular.module('readyNoteStackApp')
  .factory('Project', function ($resource) {
    return $resource('projects/:projectId', {}, {
      get: {method: 'GET', params: {projectId: 'projects'}, isArray: false}
    });
  });
