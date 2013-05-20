'use strict';

angular.module('readyNoteStackApp')
  .directive('bootstrapNavbar', function () {
    return {
      templateUrl: 'views/navbar.html',
      restrict: 'E',
      replace: true,
      transclude: true
    };
  });
