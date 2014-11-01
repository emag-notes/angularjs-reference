var app = angular.module('app');


app.service('SharedService', function() {
  this.value = {};
  this.setValue = function(key, value) {
    this.value[key] = value;
  };
  this.getValue = function(key) {
    return this.value[key];
  };
});