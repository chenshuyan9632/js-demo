/**
 *  拦截数组变异方法的思路
 */
const mutationMethods = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse',
];

const arrMethods = Object.create(Array.prototype);
const arrProp = Array.prototype;

mutationMethods.forEach(method => {
  arrMethods[method] = function(...args) {
    const result = arrProp[method].apply(this, args);
    console.log(`执行了代理原型的 ${method} 函数，data:${args} !!!`);

    return result;
  };
});

// const arr = Object.create(arrMethods);
const arr = [];
arr.__proto__ = arrMethods;
arr.push(1, 2, 3);

// 兼容无法使用 __proto__ 的情况
const arr1 = [];
const arrKeys = Object.getOwnPropertyNames(arrMethods);
arrKeys.forEach(method => {
  // arr1[method] = arrMethods[method]; 
  // arr1: [ 222, push: [λ], pop: [λ], shift: [λ], unshift: [λ], splice: [λ], sort: [λ],  reverse: [λ] ] 

  // 不可枚举
  Object.defineProperty(arr1, method, {
    value: arrMethods[method],
    enumerable: false,
    writable: true,
    configurable: true,
  });
  // arr1: [222]

});

arr1.push(222);
