import * as angular from 'angular';
import 'angular-route';
import './documentation/page/page.component';

const module = angular.module('app.routes', ['ngRoute', 'app.documentation.page']);

module.config(['$locationProvider', '$routeProvider', ($locationProvider, $routeProvider) => {
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    template: '<kb-page></kb-page>'
  });
}]);

export default module;