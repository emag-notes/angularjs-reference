var app = angular.module('app', []);

app.controller('ValueController', ['$scope', 'MyMessage', 'MyObject', 'MyFunc',
  function($scope, MyMessage, MyObject, MyFunc) {
    $scope.MyMessage = MyMessage;
    $scope.MyObject = MyObject;
    $scope.MyFunc = MyFunc;
  }]);

