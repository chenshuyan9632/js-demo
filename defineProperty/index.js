/**
 *  数据响应系统的基本思路 --> Object.defineProperty
 */

let Target = null;
function $watch(exp, fn) {
  Target = fn;
  let pathArr,
    obj = data;
  if (typeof exp === 'function') {
    exp();
    return;
  }
  if (/\./.test(exp)) {
    pathArr = exp.split('.');
    pathArr.forEach(p => {
      obj = obj[p];
    });
    return;
  }
  data[exp];
}

function cycle(data) {
  for (const key in data) {
    const dep = [];
    let val = data[key];

    const nativeString = Object.prototype.toString.call(val);
    if (nativeString === '[object Object]') {
      cycle(val);
    }

    Object.defineProperty(data, key, {
      set(newVal) {
        if (newVal === val) return;
        val = newVal;
        dep.forEach(fn => fn());
      },
      get() {
        dep.push(Target);
        return val;
      },
    });
  }
}

const data = {
  a: {
    b: 1,
  },
  b: 1,
};
cycle(data);

$watch('a.b', () => {
  console.log('change a.b');
});
$watch('b', () => {
  console.log('change b');
});

data.b = 3;
data.a.b = 3;
console.log(data.a);

const data1 = {
  name: 'shu',
  age: 18,
};
cycle(data1);

function render() {
  return console.log(`姓名：${data1.name}; 年龄：${data1.age}`);
}
$watch(render, render);

data1.name = 'shuya!!!';
