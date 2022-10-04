/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let score = 0,
    result = 0;

  for (const char of s) {
    score += char === '(' ? 1 : -1;
    if (score < 0) {
      score = 0;
      result += 1;
    }
  }

  return result + score;
};


console.log(minAddToMakeValid("())")); // 1
console.log(minAddToMakeValid("(((")); // 3