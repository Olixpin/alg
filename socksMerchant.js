const socksMerchant = (n, ar) => {
  if (ar.length !== n) return 0;
  let myMap = new Map();
  let socksPairCount = 0;

  for (let i = 0; i < n; i++) {
    const sock = ar[i];
    if (!myMap.has(sock)) myMap.set(sock, 1);
    else {
      const newCount = myMap.get(sock) + 1;
      myMap.set(sock, newCount);
    }
  }

  for (const [key, value] of myMap) {
    socksPairCount += Math.floor(value / 2);
  }

  return socksPairCount;
};

console.log(socksMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

let myMap2 = new Map();
myMap2.set(1, 2);

console.log(myMap2.get(1) + 1);
