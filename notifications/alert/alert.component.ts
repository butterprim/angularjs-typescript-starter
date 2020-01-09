import * as angular from 'angular';

import './alert.component.scss';

const module = angular.module('app.notifications.alert', []);

export class AlertCtrl {
  static $inject = [];
  constructor(){
  }

  $onInit() {
    // you can do initializations here
  }
}

module.component('kbAlert', {
  bindings: {
    alertType: '@?',
    message: '<',
    onOk: '&',
    onCancel: '&',
  },
  template: require('./alert.component.html'),
  controller: AlertCtrl,
  controllerAs: '$ctrl'
});
