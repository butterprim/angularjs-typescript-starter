import * as angular from 'angular';
import 'angular-route';
import './documentation/page/page.component';
import './contact/contact-form/contact-form.component';

const module = angular.module('app.routes', ['ngRoute', 'app.documentation.page', 'app.contact.form']);

module.config(['$locationProvider', '$routeProvider', ($locationProvider, $routeProvider) => {
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    template: '<kb-page></kb-page>'
  })
  .when('/form', {
    template: '<kb-contact-form></kb-contact-form>'
  });
}]);

export default module;