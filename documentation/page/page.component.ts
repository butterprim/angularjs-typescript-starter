import * as angular from 'angular';

import '~/notifications/badge/badge.component';

const module = angular.module('app.documentation.page', [
  'app.notifications.badge'
]);

export class PageCtrl {
  message = 'Hello everyone!';

  static $inject = [];
  constructor(){
  }
}

module.component('kbPage', {
  template: require('./page.component.html'),
  controller: PageCtrl,
  controllerAs: '$ctrl'
});
