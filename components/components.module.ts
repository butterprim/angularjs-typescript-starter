import * as angular from 'angular';

import { HeaderComponent } from './header/header.component';
import { LikeButtonComponent } from './like-button/like-button.component';

const module = angular.module('app.components', []);

module.component('bpHeader', HeaderComponent);

module.component('bpLikeBtn', LikeButtonComponent);

export default module;