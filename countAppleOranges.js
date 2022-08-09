'use strict';

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleCount = 0;
  let orangeCount = 0;

  for (let i = 0; i <= apples.length; i++) {
    if (a + apples[i] >= s && apples[i] <= t) {
      appleCount++;
    }
  }

  for (let i = 0; i <= oranges.length; i++) {
    if (b + oranges[i] >= s && b + oranges[i] <= t) {
      orangeCount++;
    }
  }

  console.log(appleCount);
  console.log(orangeCount);
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
