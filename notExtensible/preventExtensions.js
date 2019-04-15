/**
 *  @description Object.preventExtensions()
 *  1.让一个对象变的不可扩展，也就是永远不能再添加新的属性。
 *  2.不可扩展的对象的属性通常仍然可以被删除。
 *  3.只能阻止一个对象不能再添加新的自身属性，仍然可以为该对象的原型添加属性。
 */

let obj = {};
let obj2 = Object.preventExtensions(obj);
console.log(obj === obj2);

let data = {};
console.log(Object.isExtensible(data));
data = {
  prop: function() {},
  e: 222,
  a: 1,
};
console.log(data);

delete data.prop;
console.log(data);

Object.preventExtensions(data);
console.log(Object.isExtensible(data));

data.b = 2;
data['c'] = 3;

// Object.defineProperty(data, 'e', { value: 5 });  // error: 不可添加！！

// 一个对象的属性是否可以被修改与该对象是否可以扩展无关，而是与该对象在创建的时候是否声明为不可重写有关（Writable）
Object.defineProperty(data, 'a', { value: 2 });
console.log(data.a);

data.__proto__.b = 3; // 原型添加属性
console.log(data.b);
