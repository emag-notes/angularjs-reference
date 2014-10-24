angular.module('app', [])
  .controller('ParentController', ['$scope', function ($scope) {
    $scope.value = 128;
    $scope.incrementValue = function() {
      this.value++;
    };
  }])
  .controller('ChildController', ['$scope', function($scope) {
    $scope.decrementValue = function () {
      this.value--;
    }
  }]);

