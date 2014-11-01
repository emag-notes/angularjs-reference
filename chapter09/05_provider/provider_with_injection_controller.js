var app = angular.module('app');

app.controller('ProviderWithInjectionController', ['$scope', 'ProviderWithInjection', function($scope, ProviderWithInjection) {
  $scope.value = ProviderWithInjection;
}]);