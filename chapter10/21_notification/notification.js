var app = angular.module('app');

app.directive('notification', ['$timeout', function($timeout) {
  return {
    scope: {
      enable: '=',
      timeout: '='
    },
    restrict: 'E',
    // (1) transclude を利用して、子要素を通知用メッセージとして表示する
    transclude: true,
    template: '<div ng-show="enable" class="notification">' +
                '<a href="" ng-click="close()">閉じる</a>' +
                '<div ng-transclude></div>' +
              '</div>',
//    templateUrl: 'template.html',
    replace: true,
    link: function(scope) {
      scope.close = function() {
        scope.enable = false;
      };
      var promise;
      // (2) enable 属性の値を監視
      scope.$watch('enable', function(newVal) {
        if (newVal) {
          // (3) 指定した時間が経過したら閉じるように設定
          promise = $timeout(function() {
            scope.$apply(function() {
              scope.close();
            });
          }, scope.timeout, false);
        } else {
          // (4) タイムアウトをキャンセルする
          if (promise) {
            $timeout.cancel(promise);
            promise = null;
          }
        }
      });
    }
  }
}]);