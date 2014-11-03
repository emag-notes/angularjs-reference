var app = angular.module('app', []);

app.directive('compileLinkOrder', function() {
  return {
    restrict: 'E',
    compile: function(tELement, tAttrs, tTransclude) {
      var name = tAttrs.name;
      console.log(name + ":compile");
      return {
        pre: function preLink() {
          console.log(name + ':preLink');
        },
        post: function postLink() {
          console.log(name + 'postLink');
        }
      }
    }
  }
});