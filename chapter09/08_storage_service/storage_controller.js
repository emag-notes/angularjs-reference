var app = angular.module('app');

app.controller('storageController', ['$scope', 'webStorage', function($scope, webStorage) {

  // (1) Web Storage からすべてのキーを取得し、キーと webStorage のインスタンスの組を $scope.items に格納する
  function updateItems() {
    $scope.items = [];
    angular.forEach(webStorage.keys(), function(key) {
      var storage = webStorage(key);
      $scope.items.push({
        name: key,
        storage: storage
      });
    });
  }

  updateItems();

  // (2) キーと値を指定して Web Storage にデータを更新または追加する
  $scope.addItem = function(key, value) {
    var storage = webStorage(key);
    storage.set(value);
    updateItems();
  };

  // (3) Web Storage の値をすべてクリアする
  $scope.clear = function() {
    webStorage.clear();
    updateItems();
  };

  // (4) storage イベントを受け取った時に $scope.items を更新する
  webStorage.on(function(event) {
    updateItems();
  });
}]);