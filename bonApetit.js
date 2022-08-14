const bonApetit = (bill, k, b) => {
  let value = bill.reduce((a, b) => a + b, 0) - bill[k];
  if (value / 2 === b) console.log('Bon Appetit');
  else console.log(b - value / 2);
};

bonApetit([3, 10, 2, 9], 1, 7);
