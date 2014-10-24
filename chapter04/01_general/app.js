var app = angular.module('app', []);

app.controller('GeneralApiController', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {

  var baseUrl = '/angularjs-reference/chapter04/01_general/';
  $scope.items = [
    'bind.js',
    'bind_callback.js',
    'bind_partial.js',
    'copy.js',
    'extend.js',
    'foreach.js',
    'tojson.js',
    'fromjson.js',
    'equals.js',
    'judge.js'
  ];

  $scope.updateCode = function() {
    $http.get(baseUrl + $scope.selectedItem)
      .success(function(data) {
        $scope.code = data;
        $scope.result = '';
      });
  };

  $scope.run = function() {
    var console = {};
    $scope.result = '';
    console.log = function(data) {
      $scope.result += angular.toJson(data) + '\n';
    };
    eval($scope.code);
  };
}]);
