import * as angular from 'angular';
import 'angular-route';

import { PageComponent } from './page/page.component';

const module = angular.module('app.containers', []);

module.component('bpPage', PageComponent);

export default module;