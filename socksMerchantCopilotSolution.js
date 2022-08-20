const socksMerchant = (n, arr) => {
  let count = 0;
  let arrSocks = [];
  for (let i = 0; i < n; i++) {
    if (arrSocks.includes(arr[i])) {
      count++;
      arrSocks.splice(arrSocks.indexOf(arr[i]), 1);
    } else {
      arrSocks.push(arr[i]);
    }
  }
  return count;
};

const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(socksMerchant(9, arr));
