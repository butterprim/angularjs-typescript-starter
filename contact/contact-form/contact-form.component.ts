import * as angular from 'angular';

import './contact-form.component.scss';
import '../../notifications/badge/badge.component.ts';
import '../../filters/filters';
import '../services/contact.service';

const module = angular.module('app.contact.form', [
  'app.notifications.badge',
  'app.filters',
  'app.contact.service',
]);

export class ContactFormCtrl {
  isSubmitted = false;
  companyName: string;

  company: {name: string, size: number} = {name: null, size: null};

  static $inject = ['$scope', 'ContactService'];
  constructor(private $scope, private ContactService){
  }

  $onInit() {
    this.$scope.user = angular.copy(this.ContactService.getUser());
  }

  submitUserForm() {
    this.ContactService.setUserName(this.$scope.user.name);
  }

  submitCompanyForm() {
    console.log(this.company);
    console.log(this.$scope.companyForm.companyName);
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
    this.company = {name: null, size: null};
    this.isSubmitted = false;
  }
}

module.component('kbContactForm', {
  template: require('./contact-form.component.html'),
  controller: ContactFormCtrl,
  controllerAs: '$ctrl'
});
