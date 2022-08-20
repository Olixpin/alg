// const existsInString = (string, search) => string.indexOf(search) !== -1;
// console.log(existsInString('red', 'r'));

// const occurence = (stringValue, search) => {
//   let pos = stringValue.indexOf(search);
//   let count = 0;
//   while (pos !== -1) {
//     count++;
//     pos = stringValue.indexOf('search', pos + 1);
//   }
//   return count;
// };

// console.log(occurence('letters', 't'));

// Explain indexOf(fromIndex)

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf('bison', 3)); // 1

// for (let j = 7; j > 0; j--) {
//   console.log(j);
// }

// function testing(n, p) {
//   let countA = 0,
//     countB = 0;

//   if (p === 1) return 1;

//   for (let i = 2; i <= n; i++) {
//     i = i + 1;
//     countA++;
//   }

//   for (let j = n + 1; j >= 2; j--) {
//     j = j - 1;
//     console.log(j);
//     if (j === p) {
//       countB;
//       break;
//     } else {
//       countB++;
//       break;
//     }
//   }
//   return Math.min(countA, countB);
// }

// console.log(testing(5, 4));
