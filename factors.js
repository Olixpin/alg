// list all the factors of a number

// function factors(num) {
//   var factors = [];
//   for (var i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       factors.push(i);
//     }
//   }
//   return factors;
// }

// console.log(factors(12));

// return true if a number is a factor of another number

function isFactor(num, factor) {
  return num % factor === 0;
}

console.log(isFactor(12, 3));
