var app = angular.module('app', []);

app.run(['$rootScope', function($rootScope) {
  $rootScope.digestTtl(30);
}]);