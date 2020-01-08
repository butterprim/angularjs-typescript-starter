export class LikeButtonCtrl {
  static $inject = [];
  constructor(){
  }
}

export const LikeButtonComponent = {
  bindings: {
    hitLike: '&'
  },
  template: require('./like-button.component.html'),
  controller: LikeButtonCtrl
};

export default {
  LikeButtonComponent
};
