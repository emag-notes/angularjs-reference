var app = angular.module('app', []);

app.directive('myDirective', function() {
  return {
    template: '<pre>This is my first directive!</pre>'
  }
});