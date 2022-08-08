// calculate modular exponent
function modularExponent(base, exponent, modulus) {
  var result = 1;
  while (exponent > 0) {
    if (exponent % 2 == 1) {
      result = (result * base) % modulus;
    }
    exponent = Math.floor(exponent / 2);
    base = (base * base) % modulus;
  }
  return result;
}

// function modularExponent(base, exponent, modulus) {
//   if (modulus === 1) return 0;

//   let value = 1;

//   for (let i = 0; i < exponent; i++) {
//     value = (value * base) % modulus;
//   }

//   return value;
// }

let a = 6 * Math.pow(10, 77);
console.log(modularExponent(a, 27, 23));
