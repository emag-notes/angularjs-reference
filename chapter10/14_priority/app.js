var app = angular.module('app', []);

app.directive('priority1', function() {
  return {
    priority: 1,
    compile: function() {
      console.log(1);
    }
  }
}).directive('priority2', function() {
  return {
    priority: 2,
//    terminal: true,
    compile: function() {
      console.log(2);
    }
  }
}).directive('priority3', function() {
  return {
    priority: 3,
    compile: function() {
      console.log(3);
    }
  }
}).directive('priority4', function() {
  return {
    priority: 4,
    compile: function() {
      console.log(4);
    }
  }
});