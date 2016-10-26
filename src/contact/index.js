import angular from 'angular'
import 'angular-ui-router';
import component from './contact.component'

import './style.scss';

export default angular.module('contact.module', ['ui.router'])
  .component('contact', component)
  .config(($stateProvider) => {
    "ngInject";		// ng-annotate doesn't handle arrow functions automatically; need to add the directive prologue.
    $stateProvider
      .state('contact', {
        url: '/contact',
        template: '<contact />'
      });
  })
  .name;
