import * as angular from 'angular';

const module = angular.module('app.directives', []);

module.directive('kbHideOnClick', () => ({
    restrict: 'A',
    link: function($scope, element, attrs) {
      element.on('click', function() {
        element.remove();
      });
    },
  })
);
