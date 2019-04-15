# 对象 不可扩展 --> NotExtensible

#### Object.preventExtensions(obj) 对象不可扩展 (Object.isExtensible)
```
  1. 永远不能再添加新的属性
```
#### Object.seal(obj) 对象密封 (Object.isSealed)
```
  1. 不能添加新的属性，不能删除已有属性，以及不能修改已有属性的可枚举性、可配置性、可写性，但 **可能可以** 修改已有属
     性的值的对象。
  2. configurable: false
```
#### Object.freeze(obj) 对象冻结 (Object.isFrozen)
```
  1. 不能添加新的属性，不能修改已有属性的值，不能删除已有属性，以及不能修改已有属性的可枚举性、可配置性、可写性的对象。
  2. configurable: false
  3. writable: false
```
