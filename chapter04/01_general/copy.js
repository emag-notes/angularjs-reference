var srcObj = {
  id: '123',
  description: '宿題をする',
  dueDate: new Date('2014/10/23'),
  items: [
    { name: '国語' },
    { name: '数学' },
    { name: '英語' }
  ]
};

// (1) srcObj を destObj1 にコピー
var destObj1 = angular.copy(srcObj);

// (2) srcObj を destObj2 にコピー(category はなくなる)
var destObj2 = {
  category: '宿題'
};
angular.copy(srcObj, destObj2);

// ディープコピーされているので、srcObj を変更しても destObj は変化しない
srcObj.items.push({name: '物理'});

console.log('[srcObj]');
console.log(srcObj);
console.log('[destObj1]');
console.log(destObj1);
console.log('[destObj2]');
console.log(destObj2);