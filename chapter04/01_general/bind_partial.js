function add(a, b) {
  return a + b;
}

// add 関数に引数 5 を束縛する。this は束縛不要なので null を指定
var add5 = angular.bind(null, add, 5);

console.log('add5(8): ' + add5(8));