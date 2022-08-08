function compareTriplets(a, b) {
  if (a.length !== b.length) return false;
  let score = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      score[0]++;
    } else if (a[i] < b[i]) {
      score[1]++;
    }
  }
  return score;
}

console.log(compareTriplets([2, 10, 5], [3, 9, 8]));
