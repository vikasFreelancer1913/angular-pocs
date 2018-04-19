var app = angular.module('store', []);
app.directive('equalizeHeight', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var parent = element.parent();
      attrs.$set('min-height', parent.prop('offsetHeight') - 250);
      element.css('min-height', parent.prop('offsetHeight') - 250+ 'px');
       
    }
  };
});