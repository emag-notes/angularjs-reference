var app = angular.module('app');

app.constant('constService', 1234);
app.value('valueService', 5678);

app.provider('ProviderWithInjection', ['constService', function(constService) {
  this.$get = ['valueService', function(valueService) {
    return constService + valueService;
  }];
}]);