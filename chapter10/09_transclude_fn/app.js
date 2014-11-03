var app = angular.module('app', []);

app.directive('transcludeFn', function() {
  return {
    restrict: 'E',
    transclude: true,
    link: function(scope, iElement, iAttrs, controller, iTransclude) {
      var elem = iTransclude();
      iElement.append(elem);
    }
  }
});