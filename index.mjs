// function isPrime(n) {
//   let result;
//   if (n <= 1) result = false;
//   if (n === 2) result = true;

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       result = false;
//       break;
//     } else result = true;
//   }
//   return result;
// }

function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// function isPrime(n) {
//   if (n <= 1) return false;
//   if (n % 2 === 0 || n % 3 === 0) return false;
//   for (let i = 5; i * i < n; i = i + 6) {
//     if (n % i === 0 || n % (i + 2) === 0) return false;
//   }
//   return true;
// }
console.log(isPrime(47));

export default isPrime;
