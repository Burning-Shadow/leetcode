/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  return s1.length == s2.length
    && [...s1].sort().join('') === [...s2].sort().join('');
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * 
 * hash map
 */
var CheckPermutation = function (s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  const table = new Array(26).fill(0);
  for (let i = 0; i < s1.length; ++i) {
    table[s1.codePointAt(i) - 'a'.codePointAt(0)]++;
  }
  for (let i = 0; i < s2.length; ++i) {
    table[s2.codePointAt(i) - 'a'.codePointAt(0)]--;
    if (table[s2.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
      return false;
    }
  }
  return true;
};

console.log(CheckPermutation("abc", "bca")); // true
console.log(CheckPermutation("abc", "bad")); // false