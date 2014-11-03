var app = angular.module('app');

app.directive('scopeFalse', function() {
  return {
    scope: false,
    template: '<pre>{{greeting}}</pre>'
  }
});