var app = angular.module('app');

app.controller('ProductsController', ['$scope', 'productsService', function($scope, productsService) {
  $scope.products = productsService;
}]);
