function birthday(s, d, m) {
  // Write your code here
  var count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.slice(i, i + m).reduce((a, b) => a + b) == d) {
      count++;
    }
  }
  return count;
}

console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2));
