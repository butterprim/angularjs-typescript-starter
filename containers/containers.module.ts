import * as angular from 'angular';

import { PageComponent } from './page/page.component';

import '../components/components.module';
import '../directives/directives.module';

const module = angular.module('app.containers', ['app.components', 'app.directives']);

module.component('bpPage', PageComponent);

export default module;