import * as angular from 'angular';
import 'angular-route';

import './containers/containers.module';

const module = angular.module('app.routes', ['ngRoute', 'app.containers']);

module.config(['$locationProvider', '$routeProvider', ($locationProvider, $routeProvider) => {
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/page', {
    template: `<bp-page></bp-page>`,
  })
  .when('/content', {
    template: `<b>Hi</b>`,
  });
}]);

export default module;