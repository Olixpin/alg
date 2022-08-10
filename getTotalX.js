function getTotalX(a, b) {
  // Write your code here
  var count = 0;
  for (let x = 1; x <= 100; x++) {
    if (a.every(int => x % int == 0)) {
      if (b.every(int => int % x == 0)) {
        validCount++;
      }
    }
  }
  return count;
}
console.log(getTotalX([2, 6], [24, 36]));
