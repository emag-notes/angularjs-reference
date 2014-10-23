function getMessage() {
  return this.message;
}

// (1) そのまま getMessage を呼び出すと、this に message が定義されていません
var msg = getMessage();
console.log('not bound getMessage(): ' + msg);

var context = {
  message: 'Hello, World!'
};

// (2) getMessage に context を束縛して呼び出すと、'Hello, World!' が返ります
var fn = angular.bind(context, getMessage);
var msg = fn();
console.log('bound getMessage(): ' + msg);
