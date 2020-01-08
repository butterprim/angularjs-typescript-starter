export const ClickLoggerDirective = {
  restrict: 'A',
  link: function(scope, element, attrs, controllers) {
    element.on('click', function(event) {
      console.log(attrs.bpClickLogger);
    });
  }
};

export default {
  ClickLoggerDirective
};
