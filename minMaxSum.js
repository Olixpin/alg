function minMaxSum(arr) {
  let min = arr[0];
  let max = arr[1];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }

    sum += arr[i];
  }

  let minSum = sum - min;
  let maxSum = sum - max;

  console.log(minSum, maxSum);
}

minMaxSum([1, 2, 3, 4, 5]);
