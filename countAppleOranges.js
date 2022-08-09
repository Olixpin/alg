'use strict';

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleCount = 0;
  let orangeCount = 0;
  let appleFallPosition = apples.map(applePosition => applePosition + a);
  let orangesFallPosition = oranges.map(orangePosition => orangePosition + b);

  for (let i = 0; i <= apples.length; i++) {
    if (appleFallPosition[i] >= s && appleFallPosition[i] <= t) {
      appleCount++;
    }
  }

  for (let i = 0; i <= oranges.length; i++) {
    if (orangesFallPosition[i] >= s && orangesFallPosition[i] <= t) {
      orangeCount++;
    }
  }

  console.log(appleCount);
  console.log(orangeCount);
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
