var app = angular.module('app');

app.service('serviceServiceWithPrivate', function() {
  var priavteValue = 123;
  var privateMethod = function(a, b) {
    return a * b;
  };
  this.messasge = 'This is my service!';
  this.value = {
    value1: 33333,
    value2: 55555
  };
  this.add = function(a, b) {
    return a + b;
  };
});