const valleyCount = strings => {
  let valleyCount = 0;
  let alt = 0;

  for (let i = 0; i < strings.length; i++) {
    let string = strings[i];

    if (string === 'U') {
      alt++;
      if (alt === 0) {
        valleyCount++;
      }
    } else {
      alt--;
    }
  }

  return valleyCount;
};

console.log(valleyCount('DUDDUUUUDD'));
