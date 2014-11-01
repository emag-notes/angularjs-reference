var app = angular.module('app');

// 文字列をサービスに登録
app.value('MyMessage', 'This is my value!');

// オブジェクトをサービスに登録
app.value('MyObject', {
  value1: 12345,
  value2: 54321
});

// 関数をサービスに登録
app.value('MyFunc', function(a, b) {
  return a + b;
});