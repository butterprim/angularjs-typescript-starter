import * as angular from 'angular';

import { HeaderComponent } from './header/header.component';

const module = angular.module('app.components', []);

module.component('bpHeader', HeaderComponent);

export default module;