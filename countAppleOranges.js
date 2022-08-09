'use strict';

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  console.log(apples.filter(apple => a + apple >= s && a + apple <= t).length);
  console.log(
    oranges.filter(orange => b + orange >= s && b + orange <= t).length
  );
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
