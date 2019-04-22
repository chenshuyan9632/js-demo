/**
 * @param { Function } fn
 * @description 为一个`纯函数`创建一个缓存版本的函数
 */
function cached(fn) {
  const cache = Object.create(null);
  return function cachedFn(str) {
    const hit = cache[str];
    console.log(hit); // undefined, 2
    return hit || (cache[str] = fn(str));
  };
}

const data = cached(i => {
  console.log(i); // 1
  return i + 1;
});

data(1); 
data(1); // 已收集到缓存，直接返回数据
