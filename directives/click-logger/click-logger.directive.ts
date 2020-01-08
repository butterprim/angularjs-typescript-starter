export const ClickLoggerDirective = {
  restrict: 'A',
  scope: {
    message: '<'
  },
  link: function(scope, element, attrs, controllers) {
    element.on('click', function(event) {
      console.log(scope.message);
    });
  }
};
