var app = angular.module('app');

app.directive('myDirectiveCompile', function() {
  return {
    restrict: 'E',
    compile: function(tElement, tAttrs, tTransclude) {
      if (angular.isDefined(tAttrs.readonly)) {
        // readonly 属性が定義されている場合は message をそのまま表示する
        tElement.append('{{message}}');
      } else {
        // readonly 属性がない場合は input タグとして表示する
        tElement.append('<input type="text" ng-model="message"/>');
      }
    }
  }
});