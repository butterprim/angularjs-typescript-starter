import * as angular from 'angular';

import './contact-form.component.scss';
import '../../notifications/badge/badge.component.ts';

const module = angular.module('app.contact.form', [
  'app.notifications.badge'
]);

export class ContactFormCtrl {
  isSubmitted = false;

  static $inject = ['$scope'];
  constructor(public $scope){
  }

  submitCompanyForm() {
    if (this.$scope.companyForm.$invalid) {
      Object.keys(this.$scope.companyForm.$error).forEach(errorKey => {
        this.$scope.companyForm.$error[errorKey].forEach(input => {
          input.$setTouched();
        });
      });
    } else {
      this.isSubmitted = true;
    }
  }

  resetCompanyForm() {
    this.$scope.companyForm.$setPristine();
    this.$scope.companyForm.$setUntouched();
    this.$scope.company = {};
  }
}

module.component('kbContactForm', {
  template: require('./contact-form.component.html'),
  controller: ContactFormCtrl,
  controllerAs: '$ctrl'
});
