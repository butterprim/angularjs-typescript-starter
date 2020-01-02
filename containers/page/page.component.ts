export class PageCtrl {
  static $inject = [];
  constructor(){
  }
}

export const PageComponent = {
  bindings: {},
  template: require('./page.component.html'),
  controller: PageCtrl
};
