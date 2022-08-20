const merge = intervals => {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [];
  for (let i = 0; i < intervals.length; i++) {
    const current = intervals[i];
    if (merged.length === 0 || current[0] > merged[merged.length - 1][1]) {
      merged.push(current);
    } else {
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        current[1]
      );
    }
  }
  return merged;
};
