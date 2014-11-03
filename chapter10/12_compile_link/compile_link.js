var app = angular.module('app');

app.directive('myDirectiveCompileLink', function() {
  return {
    restrict: 'E',
    compile: function(tElement, tAttrs, tTransclude) {
      // コンパイル次の処理
      return function(scope, iElement, iAttrs, controller, iTransclude) {
        // リンク時の処理
      };
    }
  }
});