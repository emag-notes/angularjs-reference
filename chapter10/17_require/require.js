var app = angular.module('app');

app.directive('requireDirective', function() {
  return {
    restrict: 'E',
    controller: function() {
      this.message = 'hoge';
    },
    require: 'ngModel',
    link: function(scope, element, attrs, ngModelCtrl) {
      console.log(ngModelCtrl);
    }
  }
});