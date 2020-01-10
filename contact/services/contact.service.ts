import * as angular from 'angular';

const module = angular.module('app.contact.service', [
]);

export class ContactService {
  private user = {name: 'Customer'};

  getUser() {
    return this.user;
  }

  setUserName(name: string) {
    this.user.name = name;
  }
}

module.service('ContactService', ContactService);
