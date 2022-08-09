function kangaroo(x1, v1, x2, v2) {
  if (x1 > x2 && v1 > v2) {
    return 'NO';
  }
  if (x1 < x2 && v1 < v2) {
    return 'NO';
  }
  if (v1 === v2) return 'NO';

  if ((x2 - x1) % (v1 - v2) === 0) return 'YES';
  else return 'NO';
}

console.log(kangaroo(0, 2, 5, 3));

// if ((x2 > x1 && v2 < v1) || (x1 > x2 && v1 < v2)) return 'YES';
// else return 'NO';
