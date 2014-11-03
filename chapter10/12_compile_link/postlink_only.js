var app = angular.module('app');

app.directive('myDirectivePostLinkOnly', function() {
  return function(scope, iElement, iAttrs, controller, iTransclude) {
    // postlink
  };
});