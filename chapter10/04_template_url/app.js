var app = angular.module('app', []);

app.directive('myDirective', function() {
  return {
    templateUrl: 'my_template.html'
  }
});