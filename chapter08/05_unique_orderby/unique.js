app.filter('unique', function () {
  return function (values) {
    if (!angular.isArray(values)) {
      return values;
    }
    var newValues = [];
    angular.forEach(values, function (v) {
      if (newValues.indexOf(v) < 0) {
        newValues.push(v);
      }
    });
    return newValues;
  };
});