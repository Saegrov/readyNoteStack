'use strict';

angular.module('readyNoteStackApp')
  .factory('projectService', function ($resource) {
    return $resource('projects/:projectId', {}, {
      get: {method:'GET', params:{projectId:'projects'}, isArray:false}
    });
  });
