import * as angular from 'angular';

const module = angular.module('app.contact.service', [
]);

export class ContactService {
  private user = {name: 'Customer'};

  getUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
  }
}

module.service('ContactService', ContactService);
