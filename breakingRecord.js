function breakingRecords(scores) {
  let max = scores[0];
  let min = scores[0];
  let count = [0, 0];

  scores.map(score => {
    if (score > max) {
      max = score;
      count[0]++;
    }
    if (score < min) {
      min = score;
      count[1]++;
    }
  });
  return count;
}

console.log(breakingRecords([12, 24, 10, 24]));
