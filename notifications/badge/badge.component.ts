import * as angular from 'angular';

import './badge.component.scss';

const module = angular.module('app.notifications.badge', []);

export class BadgeCtrl {
  badgeType: string;

  static $inject = [];
  constructor(){
  }

  $onInit() {
    // you can do initializations here
    // this.badgeType = 'error';
  }
}

module.component('kbBadge', {
  bindings: {
    badgeType: '@?',
    size: '@?',
  },
  transclude: true,
  template: require('./badge.component.html'),
  controller: BadgeCtrl,
  controllerAs: '$ctrl'
});
