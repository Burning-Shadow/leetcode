/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function (s) {
  if (s.length === 1) {
    return 1;
  }
  let result = 1;
  let slow = 0;
  let fast = 0;
  for (; fast < s.length; fast++) {
    if (fast > 0 && s[fast].charCodeAt() - 1 === s[fast - 1].charCodeAt()) {
      result = Math.max(fast - slow + 1, result);
    } else {
      slow = fast;
    }
  }
  return result;
};

console.log(longestContinuousSubstring("abacaba")); // 4
console.log(longestContinuousSubstring("abcde")); // 5