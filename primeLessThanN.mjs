import isPrime from './index.mjs';

function primeLessThanN(n) {
  let arrNum = [];
  for (let i = 0; i < n; i++) {
    arrNum.push(i);
  }

  return arrNum.filter(n => isPrime(n)).join(' ');
}

console.log(primeLessThanN(10));
