var app = angular.module('app');

app.directive('tax', [function() {
  return {
    restrict: 'E',
    require: 'ngModel',
    template: '<input type="text" class="tax"/>',
    replace: true,
    scope: {rate: '='},
    link: function(scope, element, attrs, ngModelCtrl) {
      // (1) $modelValue が変化した時に DOM のレンダリング処理を行う
      ngModelCtrl.$render = function() {
        element.val(ngModelCtrl.$viewValue);
      };

      // (2) DOM のイベントが発生した時に $viewValue を変更する
      element.on('change', function() {
        scope.$apply(function() {
          ngModelCtrl.$setViewValue(element.val());
        });
      });

      // (3) $modelValue から $viewValue への変換
      ngModelCtrl.$formatters.push(function(price) {
        price = parseInt(price);
        if (isNaN(price)) {
          ngModelCtrl.$setValidity('tax', false);
          ngModelCtrl.$setPristine();
          return '';
        } else {
          ngModelCtrl.$setValidity('tax', true);
          return Math.floor(price * (1 + scope.rate));
        }
      });

      // (4) $viewValue から $modelValue への変換
      ngModelCtrl.$parsers.push(function(price) {
        price = parseInt(price);
        if (isNaN(price)) {
          ngModelCtrl.$setValidity('tax', false);
          return '';
        } else {
          ngModelCtrl.$setValidity('tax', true);
          return Math.ceil(price / (1 + scope.rate));
        }
      });
    }
  }
}]);