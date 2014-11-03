var app = angular.module('app');

app.directive('parseDirective', ['$parse', function($parse) {
  return {
    restrict: 'E',
    template: 'x: {{x}}, y: {{y}}, literal: {{isLiteral}}, constant: {{isConstant}}',
    scope: {},
    link: function(scope) {
      scope.x = 123;
      // (1) scope.x を取得するための関数を生成
      var getter = $parse('x');
      scope.y = getter(scope);
      // (2) scope.x に値を設定するための関数を取得
      var setter = getter.assign;
      setter(scope, 456);
      // (3) $parse に渡した式がリテラルかどうか
      scope.isLiteral = getter.literal;
      // (4) $parse に渡した式が変更不可能かどうか
      scope.isConstant = getter.constant;
    }
  }
}]);