/**
 *  @description Object.freeze()
 * 
    1. 所有自身属性都不可能以任何方式被修改。
    2. 数据属性的值不可更改，访问器属性（有getter和setter）也同样
    3. 如果一个属性的值是个对象，则这个对象中的属性是可以修改的，除非它也是个冻结对象。
 */

let obj = {
  prop: function() {},
  foo: 'baz',
};

obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

let o = Object.freeze(obj);
console.log(Object.isFrozen(o));

obj.foo = 'aaa'; // 静默失败
obj.a = 'bbb'; // 静默失败
console.log(obj);

// Object.defineProperty(obj, 'ohai', { value: 17 }); //抛出 TypeError 异常
// Object.defineProperty(obj, 'foo', { value: 'eit' }); //抛出 TypeError 异常

let data = {
  a: {},
};
Object.freeze(data); //浅冻结
data.a.b = 11;
console.log(data);

// 深冻结 --> 递归实现

function deepFreeze(o) {
  var prop, propKey;
  Object.freeze(o); //首先冻结第一层对象
  for (propKey in o) {
    prop = o[propKey];
    if (
      !o.hasOwnProperty(propKey) ||
      !(typeof prop === 'object') ||
      Object.isFrozen(prop)
    ) {
      continue;
    }
    deepFreeze(prop); //递归
  }
}

deepFreeze(data);

data.a.c = 22; // 静默失败
console.log(data);
