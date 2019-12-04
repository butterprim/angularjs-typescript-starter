import * as angular from 'angular';
import { AppComponent } from './app.component';

import './app-router.module';
import './styles.scss';

const module = angular.module('application', ['app.routes']);

module.config(function ($compileProvider) {
  $compileProvider.debugInfoEnabled(true);
  $compileProvider.strictComponentBindingsEnabled(true);
  $compileProvider.commentDirectivesEnabled(false);
  $compileProvider.cssClassDirectivesEnabled(false);
}); 

module.run(function () {
});

module.component('appRoot', AppComponent);

angular.element(document).ready(function () {
  angular.bootstrap(document, ['application']);
});