function diagonalDifference(arr) {
  // Write your code here
  let leftToRightDiagonal = [];
  let rightToLeftDiagonal = [];
  let sumOfLeftDiagonal = 0;
  let sumOfRightDiagonal = 0;
  for (let i = 0; i < arr.length; i++) {
    leftToRightDiagonal.push(arr[i][i]);
    rightToLeftDiagonal.push(arr[i][arr.length - 1 - i]);
  }

  sumOfLeftDiagonal = leftToRightDiagonal.reduce(
    (prev, curr) => prev + curr,
    0
  );
  sumOfRightDiagonal = rightToLeftDiagonal.reduce(
    (prev, curr) => prev + curr,
    0
  );

  let result = sumOfLeftDiagonal - sumOfRightDiagonal;

  if (result < 0) return -1 * result;
  return result;
}

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

console.log(diagonalDifference(arr));
