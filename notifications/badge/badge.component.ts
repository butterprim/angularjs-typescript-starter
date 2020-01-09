import * as angular from 'angular';

import './badge.component.scss';

const module = angular.module('app.notifications.badge', []);

export class BadgeCtrl {
  static $inject = [];
  constructor(){
  }


}

module.component('kbBadge', {
  bindings: {
    badgeType: '@?',
    size: '@?',
    message: '<'
  },
  template: require('./badge.component.html'),
  controller: BadgeCtrl,
  controllerAs: '$ctrl'
});
