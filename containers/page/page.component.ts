export class PageCtrl {
  public likes = 0;

  static $inject = [];
  constructor(){
  }

  incrementLikes() {
    this.likes++;
  }
}

export const PageComponent = {
  bindings: {},
  template: require('./page.component.html'),
  controller: PageCtrl
};
