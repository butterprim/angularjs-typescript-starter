export class AppCtrl {
  static $inject = [];
  constructor(){
  }
}

export const AppComponent = {
  bindings: {},
  template: require('./app.component.html'),
  controller: AppCtrl
};
