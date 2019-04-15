/**
 *  @description Object.isExtensible()
 */
const data = { a: 1 };
console.log(Object.isExtensible(data)); // true

const data1 = Object.create(
  {},
  {
    a: {
      value: 1,
      configurable: true, // 可配置 （与是否可扩展无关）
      enumerable: true, // 可枚举
      writable: true, // 可写
    },
  },
);
console.log(Object.isExtensible(data1)); // true

const data2 = Object.create(
  {},
  {
    a: {
      value: 1,
      configurable: false,
      enumerable: true,
      writable: true,
    },
  },
);
console.log(Object.isExtensible(data2)); // true
