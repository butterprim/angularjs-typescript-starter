import * as angular from 'angular';

import '../../notifications/badge/badge.component';
import '../../notifications/alert/alert.component';
import '../../directives/directive';
import '../../contact/services/contact.service';

const module = angular.module('app.documentation.page', [
  'app.notifications.badge',
  'app.notifications.alert',
  'app.directives',
  'app.contact.service'
]);

export class PageCtrl {
  message = 'Hello everyone!';
  activity: string[] = [];

  static $inject = ['ContactService'];
  constructor(private ContactService){
  }

  mark(data: any) {
    this.activity.push(data.code);
  }

  get userName() {
    return this.ContactService.getUser().name;
  }
}

module.component('kbPage', {
  template: require('./page.component.html'),
  controller: PageCtrl,
  controllerAs: '$ctrl'
});
