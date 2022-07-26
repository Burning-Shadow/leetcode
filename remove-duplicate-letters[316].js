/**
 * @param {string} s
 * @return {string}
 * 
 * 单调栈
 */
var removeDuplicateLetters = function (s) {
  const result = [];
  for (let i = 0; i < s.length; i++) {
    if (result.includes(s[i])) continue;
    while (result[result.length - 1] > s[i] && s.indexOf(result[result.length - 1], i) > i) result.pop();
    result.push(s[i]);
  }
  return result.join('');
};

console.log(removeDuplicateLetters("bcabc")); // abc
console.log(removeDuplicateLetters("cbacdcbc")); // acdb