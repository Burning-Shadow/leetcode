/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let valid = true;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c === '|') {
      valid = !valid;
    } else if (c === '*' && valid) {
      result++;
    }
  }
  return result;
};






console.log(countAsterisks("l|*e*et|c**o|*de|")); // 2
console.log(countAsterisks("iamprogrammer")); // 0
console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l")); // 5
