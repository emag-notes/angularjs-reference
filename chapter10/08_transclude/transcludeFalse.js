var app = angular.module('app', []);

app.directive('transcludeFalse', function() {
  return {
    restrict: 'E',
    transclude: false,
    template: '<div></div>'
  };
});