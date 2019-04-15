/**
 *  @description Object.seal() 
 *
    1.不能添加新属性，且所有已有属性会变的不可配置。
    2.属性不可配置的效果就是属性变的不可删除，以及一个数据属性不能被重新定义成为访问器属性，
    3.不会影响从原型链上继承的属性。但 __proto__ () 属性的值也会不能修改。
 */

let obj = {
  prop: function() {},
  foo: 'bar',
};

obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;
console.log(obj);

let o = Object.seal(obj);
console.log(o === obj);
console.log(Object.isSealed(obj));

obj.foo = 'aaa';
console.log(obj); //可修改

// error: 不可重新配置
// Object.defineProperty(obj, 'foo', {
//   get: function() {
//     return 'g';
//   },
// });

obj.c = 'ccc'; //静默失败
console.log(obj);

delete obj.foo; //静默失败
console.log(obj);
