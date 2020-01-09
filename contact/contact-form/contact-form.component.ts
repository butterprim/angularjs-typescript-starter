import * as angular from 'angular';

const module = angular.module('app.contact.form', [

]);

export class ContactFormCtrl {

  static $inject = ['$scope'];
  constructor($scope){
  }
}

module.component('kbContactForm', {
  template: require('./contact-form.component.html'),
  controller: ContactFormCtrl,
  controllerAs: '$ctrl'
});