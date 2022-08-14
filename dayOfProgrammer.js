function dayOfProgrammer(year) {
  // Write your code here
  let day = 256;
  let month = 12;
  let leapYear = false;
  let dayOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year === 1918) {
    day = 256;
    month = 26;
    console.log(day, month);
  } else if (year < 1918) {
    if (year % 4 === 0) {
      leapYear = true;
    }
  } else if (year > 1918) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      leapYear = true;
    }
  }

  if (leapYear) {
    dayOfMonth[1] = 29;
  }

  if (month === 26) {
    return `${month}.09.${year}`;
  }
  for (let i = 0; i < dayOfMonth.length; i++) {
    if (day > dayOfMonth[i]) {
      day -= dayOfMonth[i];
    } else {
      month = i + 1;
      break;
    }
  }
  console.log(month);
  return `${day}.0${month}.${year}`;
}

console.log(dayOfProgrammer(2017));
