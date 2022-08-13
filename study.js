function migratoryBirds(arr) {
  let objectArr = arr.reduce((obj, b) => {
    obj[b] = ++obj[b] || 1;
    return obj;
  }, {});
  //      console.log(objectArr)
  const maxVal = Math.max(...Object.values(objectArr));
  const num = Object.keys(objectArr).find(key => objectArr[key] === maxVal);

  return num;
}

// let arr = [1, 4, 4, 4, 5, 3];
// console.log(migratoryBirds(arr));

// const array = [1, 2, 3, 4];
// const initialValue = 0;

// const sumWithInitial = array.reduce((prev, curr) => {
//   //   console.log(prev);
//   console.log({ prev, curr });
// }, 0);
// console.log(sumWithInitial);

// arr.reduce((prev, curr, index, array) => {
//   console.log(curr);
// });

// const getMax = (a, b) => Math.max(a, b);

// let result = [1, 100].reduce(getMax, 50);
// console.log(result);

// console.log([50].reduce(getMax, 50));

// function reducer(prev, curr, index) {
//   const returns = prev + curr;
//   console.log(
//     `previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`
//   );
//   return returns;
// }

// arr.reduce(reducer);

const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];

const sum = objects.reduce((prev, curr) => prev + curr.x, 0);
// console.log(sum);

const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];

// console.log(flattened.reduce((prev, curr) => prev.concat(curr), []));

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
const countedNames = names.reduce((allNames, name) => {
  allNames[name] ??= 0;
  allNames[name]++;
  return allNames;
}, {});

// let na = undefined;

// console.log(na ?? "Name doesn't exist");
// console.log(countedNames);

// Grouping object by property
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    acc[key] ??= [];
    acc[key].push(obj);
    return acc;
  }, {});
}

console.log(groupBy(people, 'age'));

const friends = [
  { name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21 },
  { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
  { name: 'Alice', books: ['The Lord of the Rings', 'The Shining'], age: 18 },
];

const allbooks = friends.reduce(
  (previousValue, currentValue) => [...previousValue, ...currentValue.books],
  ['Alphabet']
);
const allBooks = friends.reduce(
  (prev, curr) => [...prev, ...curr.books],
  ['Alphabets']
);

console.log(allbooks);
console.log(allBooks);

// Remove duplicate in an array
const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
const distinctArray = myArray.reduce((prev, curr) => {
  if (!prev.includes(curr)) prev.push(curr);
  return prev;
}, []);
console.log(distinctArray);

// Replace .filter().map() with .reduce()

const numbers = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

const doublePositiveNumbers = numbers.reduce((prev, curr) => {
  if (curr > 0) prev.push(curr * 2);
  return prev;
}, []);

console.log(doublePositiveNumbers);
