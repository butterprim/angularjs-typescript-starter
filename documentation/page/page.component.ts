import * as angular from 'angular';

import '../../notifications/badge/badge.component';
import '../../notifications/alert/alert.component';
import '../../directives/directive';

const module = angular.module('app.documentation.page', [
  'app.notifications.badge',
  'app.notifications.alert',
  'app.directives',
]);

export class PageCtrl {
  message = 'Hello everyone!';
  activity: string[] = [];

  static $inject = [];
  constructor(){
  }

  mark(data: any) {
    this.activity.push(data.code);
  }
}

module.component('kbPage', {
  template: require('./page.component.html'),
  controller: PageCtrl,
  controllerAs: '$ctrl'
});
