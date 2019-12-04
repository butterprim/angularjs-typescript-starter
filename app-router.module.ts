import * as angular from 'angular';
import 'angular-route';

const module = angular.module('app.routes', ['ngRoute']);

module.config(['$locationProvider', '$routeProvider', ($locationProvider, $routeProvider) => {
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/page', {
    template: `Page`,
  })
  .when('/content', {
    template: `<b>Hi</b>`,
  });
}]);

export default module;