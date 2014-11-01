var app = angular.module('app');

app.factory('TaxCalculatorFactory', function() {

  function TaxCaluculator(tax) {
    this.tax = tax;
  }

  TaxCaluculator.prototype.calculate = function(price) {
    price = parseInt(price);
    if (isNaN(price)) {
      return 0;
    } else {
      return Math.floor(price + (price * this.tax));
    }
  };

  function TaxCalculatorFactory(tax) {
    return new TaxCaluculator(tax);
  }

  return TaxCalculatorFactory;
});