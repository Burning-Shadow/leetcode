/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  let digits = '';
  for (let i = 0; i < number.length; ++i) {
    const ch = number[i];
    if (isDigit(ch)) {
      digits += ch;
    }
  }

  let n = digits.length;
  let pt = 0;
  let result = '';
  while (n > 0) {
    if (n > 4) {
      result += digits.slice(pt, pt + 3) + "-";
      pt += 3;
      n -= 3;
    } else {
      if (n == 4) {
        result += digits.slice(pt, pt + 2) + "-" + digits.slice(pt + 2, pt + 4);
      } else {
        result += digits.slice(pt, pt + n);
      }
      break;
    }
  }
  return result;
};

const isDigit = (ch) => {
  return parseFloat(ch).toString() === "NaN" ? false : true;
}

console.log(reformatNumber("1-23-45 6")); // "123-456"
console.log(reformatNumber("123 4-567")); // "123-45-67"
console.log(reformatNumber("123 4-5678")); // "123-456-78"
console.log(reformatNumber("12")); // "12"
console.log(reformatNumber("--17-5 229 35-39475 ")); // "175-229-353-94-75"