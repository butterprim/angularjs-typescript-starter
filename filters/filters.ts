import * as angular from 'angular';

const module = angular.module('app.filters', []);

module.filter('kbUppercase', () => {
  return (input) => {
    return input.toUpperCase();
  };
});
