function MyClass() {
  this.message = 'Hello, World!';
}

// (1) MyClass のインスタンス変数が表示される?
MyClass.prototype.getMessage = function() {
  console.log(this.message);
};

MyClass.prototype.setCallback = function() {
  // (2) コールバックとして呼び出された時の this が MyClass のインスタンスでないため、undefined が表示される
  $timeout(this.getMessage, 1000);

  // (3) bind すると this の値が束縛されるので、'Hello, World!' が表示される
  $timeout(angular.bind(this, this.getMessage), 2000);
};

var c = new MyClass();
c.setCallback();

