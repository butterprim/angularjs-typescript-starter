import * as angular from 'angular';

import { ClickLoggerDirective } from './click-logger/click-logger.directive';

const module = angular.module('app.directives', []);

module.directive('bpClickLogger', () => ClickLoggerDirective);

export default module;