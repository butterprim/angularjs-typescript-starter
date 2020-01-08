export class PageCtrl {
  public likes = 0;

  static $inject = [];
  constructor(){
  }

  incrementLikes() {
    this.likes++;
  }

  get likesDisplay() {
    if (this.likes == 1) {
      `You have 1 like`;
    }
    return `You have ${this.likes} likes`;
  }
}

export const PageComponent = {
  bindings: {},
  template: require('./page.component.html'),
  controller: PageCtrl
};
