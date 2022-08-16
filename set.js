const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(3);
mySet.add(5);
console.log(mySet);

mySet.add({ a: 1, b: 2 });
// console.log(mySet);

// console.log(mySet.has(Math.sqrt(25)));

// for (const item of mySet.keys()) {
//   console.log(item);
// }

for (const [key, values] of mySet.entries()) {
  console.log(key, values);
}

const mySet2 = new Set([1, 2, 3, 4, 5]);
console.log(...mySet2);

const intersection = new Set([...mySet].filter(x => mySet2.has(x)));

const difference = new Set([...mySet].filter(x => !mySet2.has(x)));

console.log(difference);

function isSuperSet(set, subset) {
  for (const elem of subset) {
    if (!set.has(elem)) return false;
  }
  return true;
}

function union(setA, setB) {
  const _union = new Set(setA);
  for (const elem of setB) {
    _union.add(elem);
  }
  return _union;
}

function intersection(setA, setB) {
  const _intersection = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) _intersection.add(elem);
  }
  return _intersection;
}

function symmetricDifference(setA, setB) {
  const _symmetricDifference = new Set();
  for (const elem of setA) {
    if (!setB.has(elem)) _symmetricDifference.add(elem);
  }
  for (const elem of setB) {
    if (!setA.has(elem)) _symmetricDifference.add(elem);
  }
  return _symmetricDifference;
}

function difference(setA, setB) {
  const _difference = new Set();
  for (const elem of setA) {
    if (!setB.has(elem)) _difference.add(elem);
  }
  return _difference;
}
