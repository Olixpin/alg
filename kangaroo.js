function kangaroo(x1, v1, x2, v2) {
  let result = 'NO';
  if ((x1 > x2 && v1 > v2) || (x1 < x2 && v1 < v2) || v1 == v2) {
    return result;
  }

  (x2 - x1) % (v1 - v2) === 0 ? (result = 'YES') : (result = 'NO');
  return result;
}

console.log(kangaroo(0, 2, 5, 3));
