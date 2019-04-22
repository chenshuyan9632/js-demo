/**
 *  Array
 */

const arrayMax = arr => Math.max(...arr);
console.log(arrayMax([9, 2, 1])); // 9

const arrayMin = arr => Math.min(...arr);
console.log(arrayMin([9, 1, 2])); // 1

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size),
  );
console.log(chunk([1, 2, 3, 4, 5], 2)); // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]

const compact = arr => arr.filter(Boolean);
console.log(compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])); // [ 1, 2, 3, 'a', 's', 34 ]

const countOccurrences = (arr, value) =>
  arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0);
console.log(countOccurrences([1, 2, 3, 4, 1, 2, 1], 1)); // 3

const deepFlatten = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
console.log(deepFlatten([1, 2, [3, 4, [5, 6, 7]]])); // [ 1, 2, 3, 4, 5, 6, 7 ]

const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};
console.log(difference([1, 2, 3, 4], [2, 3, 4, 5])); // [ 1 ]

const distinctValuesOfArray = arr => [...new Set(arr)];
console.log(distinctValuesOfArray([1, 2, 2, 3, 4, 4, 5])); // [ 1, 2, 3, 4, 5 ]

const dropElements = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr.shift();
  return arr;
};
console.log(dropElements([1, 2, 3, 4], n => n >= 3)); //[ 3, 4 ]

const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === 0);
console.log(everyNth([1, 2, 3, 4, 5, 6], 2));

const filterNonUnique = arr =>
  arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
console.log(filterNonUnique([1, 2, 2, 3, 4, 4, 5]));

const flatten = arr => arr.reduce((a, v) => a.concat(v), []);
console.log(flatten([2, [1, 2]]));

const flattenDepth = (arr, depth = 1) =>
  depth != 1
    ? arr.reduce(
        (a, v) => a.concat(Array.isArray(v) ? flattenDepth(v, depth - 1) : v),
        [],
      )
    : arr.reduce((a, v) => a.concat(v), []);
console.log(flattenDepth([1, [2], [[[3], 4], 5]], 2));

const groupBy = (arr, func) =>
  arr
    .map(typeof func === 'function' ? func : val => val[func])
    .reduce((acc, val, i) => {
      console.log(acc, val, i);

      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {});
console.log(groupBy(['one', 'three', 'two'], 'length'));

const initiallzeArrayWithRange = (end, start = 0) =>
  Array.from({ length: end - start }).map((v, i) => i + start);
console.log(initiallzeArrayWithRange(5));

const initiallzeArrayWithValues = (n, value = 0) => Array(n).fill(value);
console.log(initiallzeArrayWithValues(5, 2));

const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};
console.log(intersection([1, 2, 3, 4], [2, 3, 4]));

// const mapObject = (arr, fn) =>
//   (a => (
//     (a = [arr, arr.map(fn)]),
//     a[0].reduce((acc, val, i) => ((acc[val] = a[1][i]), acc), {})
//   ))();
// const squareIt = arr => mapObject(arr, a => a * a);
// console.log(squareIt([1, 2, 3]));

