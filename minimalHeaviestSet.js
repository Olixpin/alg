function numberOfItems(s, startIndices, endIndices) {
  // function must return results for each of the startIndices[i] and endIndices[i]

  let results = [];
  for (let i = 0; i < startIndices.length; i++) {
    let startIndex = startIndices[i];
    let endIndex = endIndices[i];
    let result = 0;
    for (let j = startIndex; j <= endIndex; j++) {
      result += s[j];
    }
    results.push(result);
  }
  return results;
}
