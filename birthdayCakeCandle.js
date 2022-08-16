function birthdayCakeCandles(candles) {
  let number = 0;
  let max = candles[0];
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > max) {
      max = candles[i];
    }
  }

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === max) number++;
  }

  if (number <= 0) {
    return 0;
  }
  return number;
}

console.log(birthdayCakeCandles([9, 8, 8]));
