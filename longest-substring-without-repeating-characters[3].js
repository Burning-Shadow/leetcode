/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  const len = s.length;
  if (len === 1) return 1;
  let result = 0;

  for (let i = 0; i < len; i++) {
    let index = i + 1;
    while (index < len) {
      const str = s.slice(i, index);
      // console.log(str, s[index], index, result);
      if (str.includes(s[index])) {
        result = Math.max(result, index - i);
        break;
      }
      index++;
    }
    if (index === len) result = Math.max(result, index - i);
  }

  return result;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("au")); // 2
