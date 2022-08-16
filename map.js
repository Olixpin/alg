// const contacts = new Map();

// contacts.set('Jessie', { phone: '555-111-1111', address: '111 Main St.' });
// contacts.has('Jessie'); // true
// contacts.get('Hillary'); // undefined
// console.log(contacts.get('Lekan'));

// console.log(contacts.size);
// console.log(contacts.values('Jessie'));
// console.log(contacts.entries('Jessie'));

// //how can I use this? get Map[@@species]

// const myMap = new Map();

// const keyString = 'a String';
// const keyObj = {};
// const keyFunc = function () {};

// myMap.set(keyString, 'value associated with string');
// myMap.set(keyObj, 'value associated with keyObj');
// myMap.set(keyFunc, 'value associated with keyFunc');

// console.log(myMap.get(function () {}));

// myMap.set(NaN, 'not a number');
// console.log(myMap.get(NaN));

// const otherNaN = Number('foo');
// myMap.set(otherNaN, 'also not a number');
// console.log(myMap.get(otherNaN));

// const myMap = new Map();

// myMap.set(0, 'zero');
// myMap.set(1, 'one');

// // for (const [key, value] of myMap) {
// //   console.log(`${key} = ${value}`);
// // }

// for (const [key, value] of myMap.entries()) {
//   console.log(`${key} = ${value}`);
// }

// myMap.forEach((value, key) => {
//   console.log(`${key} = ${value}`);
// });

// const kvArray = [
//   ['key1', 'value'],
//   ['key2', 'value2'],
// ];
// const myMap = new Map(kvArray);
// console.log(myMap);

// // console.log(Array.from(myMap));

// console.log([...myMap]);
// console.log(Array.from(myMap.keys()));

const original = new Map();
original.set(1, 'one');
console.log(original);

// passing a map to a map create a copy of the original map and not a reference to the original map
const copy = new Map(original);
console.log(copy === original); // false

// console.log(copy === original);
const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

const second = new Map([
  [1, 'uno'],
  [2, 'dos'],
  [3, 'tres'],
]);

console.log([...first, ...second]);
