'use strict';

var app = angular.module('app', []);

app.controller('timeout', ['$scope', '$timeout', function ($scope, $timeout) {
  $scope.count = 0;
  var tp = $timeout(function () {
    $scope.count = 100;
  }, 100);
  $timeout.cancel(tp);
}]);