'use stricts';

function migratoryBirds(arr) {
  let birdCount = {};
  let maxCount = 0;
  let maxBird = 0;

  for (let i = 0; i < arr.length; i++) {
    if (birdCount[arr[i]] === undefined) {
      birdCount[arr[i]] = 1;
    } else {
      birdCount[arr[i]]++;
    }
  }

  for (let key in birdCount) {
    if (birdCount[key] > maxCount) {
      maxCount = birdCount[key];
      maxBird = key;
    }
  }

  return maxBird;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
