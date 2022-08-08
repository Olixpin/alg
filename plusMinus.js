function plusMinus(arr) {
  let positive = [];
  let negative = [];
  let zero = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= -1) negative.push(arr[i]);
    if (arr[i] > 0) positive.push(arr[i]);
    if (arr[i] === 0) zero.push(arr[i]);
  }

  let value = [positive, negative, zero];

  value = value.map((val) => (val.length / arr.length).toFixed(6));

  for (let i = 0; i < value.length; i++) {
    console.log(value[i]);
  }
}

let arr = [-4, 3, -9, 0, 4, 1];

plusMinus(arr);

// let positive = [];
// let negative = [];
// let zero = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] <= -1) negative.push(arr[i]);
//   if (arr[i] > 0) positive.push(arr[i]);
//   if (arr[i] === 0) zero.push(arr[i]);
// }

// console.log(positive, negative, zero);
