var app = angular.module('app', []);

app.config(function(webStorageProvider) {
  webStorageProvider.setStorageType('sessionStorage');
});

app.controller('TaxController', ['$scope', 'TaxCalculatorFactory', function($scope, TaxCalculatorFactory) {
  var taxCalculator5 = TaxCalculatorFactory(0.05);
  var taxCalculator8 = TaxCalculatorFactory(0.08);


  $scope.calculator5 = function(price) {
    return taxCalculator5.calculate(price);
  };

  $scope.calculator8 = function(price) {
    return taxCalculator8.calculate(price);
  };
}]);
