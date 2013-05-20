'use strict';

angular.module('readyNoteStackApp')
  .factory('projectService', function ($resource) {
    return $resource('projects/:projectId', {}, {
      query: {method:'GET', params:{projectId:'projects'}, isArray:true}
    });
  });
