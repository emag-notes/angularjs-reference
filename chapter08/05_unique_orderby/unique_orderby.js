app.filter('uniqueOrderBy', ['$filter', function craeteUniqueOrderByFilter($filter) {
  return function uniqueOrderByFilter(values, exp, reverse) {
    if (!angular.isArray(values)) {
      return values;
    }
    var unique = $filter('unique');
    var orderBy = $filter('orderBy');

    var uniqueValues = unique(values);
    return orderBy(uniqueValues, exp || angular.identity, reverse);
  };
}]);