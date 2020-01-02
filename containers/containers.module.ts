import * as angular from 'angular';

import { PageComponent } from './page/page.component';

import '../components/components.module';

const module = angular.module('app.containers', ['app.components']);

module.component('bpPage', PageComponent);

export default module;