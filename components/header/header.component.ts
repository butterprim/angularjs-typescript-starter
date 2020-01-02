export class HeaderCtrl {
  static $inject = [];
  constructor(){
  }
}

export const HeaderComponent = {
  bindings: {
    title: '@'
  },
  template: require('./header.component.html'),
  controller: HeaderCtrl
};
