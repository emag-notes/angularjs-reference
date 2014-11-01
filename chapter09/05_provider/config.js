var app = angular.module('app');

app.config(['MyServiceProvider', function(MyServiceProvider) {
  MyServiceProvider.setPrefix('[');
  MyServiceProvider.setSuffix(']');
}]);