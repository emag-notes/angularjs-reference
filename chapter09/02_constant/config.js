var app = angular.module('app');

app.config(['ConstObject', function(ConstObject) {
  ConstObject.value1 = 99999;
}]);