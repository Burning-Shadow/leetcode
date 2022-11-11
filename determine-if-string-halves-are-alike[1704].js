/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const len = s.length >> 1;
  const a = s.substring(0, len);
  const b = s.substring(len);
  const h = "aeiouAEIOU";
  let sum1 = 0, sum2 = 0;

  for (const char of a) {
    if (h.includes(char)) sum1 += 1;
  }
  for (const char of b) {
    if (h.includes(char)) sum2 += 1;
  }

  return sum1 === sum2;
};



console.log(halvesAreAlike("book")); // true
console.log(halvesAreAlike("textbook")); // false
