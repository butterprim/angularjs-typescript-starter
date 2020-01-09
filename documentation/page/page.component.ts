import * as angular from 'angular';

import '../../notifications/badge/badge.component';
import '../../notifications/alert/alert.component';
import '../../directives/hide.directive';

const module = angular.module('app.documentation.page', [
  'app.notifications.badge',
  'app.notifications.alert',
  'app.directives',
]);

export class PageCtrl {
  message = 'Hello everyone!';
  readHistory: string[] = []
  cancelHistory: string[] = [];

  static $inject = [];
  constructor(){
  }

  markAsRead(alertCode: string) {
    this.readHistory.push(alertCode);
  }

  markAsCancelled(alertCode: string) {
    this.cancelHistory.push(alertCode);
  }
}

module.component('kbPage', {
  template: require('./page.component.html'),
  controller: PageCtrl,
  controllerAs: '$ctrl'
});
