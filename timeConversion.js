function timeConversion(s) {
  let time = s.split(":");
  let hour = time[0];
  let minute = time[1];
  let second = time[2];
  let ampm = second.substring(second.length - 2);
  let newSecond = second.substring(0, second.length - 2);
  if (ampm == "PM") {
    if (hour != 12) {
      hour = parseInt(hour) + 12;
    }
  } else {
    if (hour == 12) {
      hour = "00";
    }
  }
  return hour + ":" + minute + ":" + newSecond;
}

console.log(timeConversion("09:45:54AM"));
console.log("09:45:54AM".split(":"));
