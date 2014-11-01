var app = angular.module('app');

// 文字列をサービスに登録
app.constant('ConstMessage', 'This is my constant!');

// オブジェクトをサービスに登録
app.constant('ConstObject', {
  constant1: 12345,
  constant2: 54321
});

// 関数をサービスに登録
app.constant('ConstFunc', function(a, b) {
  return a + b;
});