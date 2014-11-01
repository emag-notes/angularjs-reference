var app = angular.module('app', []);

app.controller('ConstantController', ['$scope', 'ConstMessage', 'ConstObject', 'ConstFunc',
  function($scope, ConstMessage, ConstObject, ConstFunc) {
    $scope.ConstMessage = ConstMessage;
    $scope.ConstObject = ConstObject;
    $scope.ConstFunc = ConstFunc;
  }]);

