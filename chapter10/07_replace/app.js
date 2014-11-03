var app = angular.module('app', []);

app.directive('myDirective', function() {
  return {
    replace: true,
    template: '<pre class="tmp-class">This is my first directive!</pre>'
  }
});