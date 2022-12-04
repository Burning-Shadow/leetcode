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


/**
 * @param {string} s
 * @return {number}
 * 
 * 双指针模板
 */
 var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  const cnt = {};
  let left = 0, result = 0;
  for (let right = 0; right < len; right++) {
    cnt[s[right]] = !cnt[s[right]] ? 1: cnt[s[right]] + 1;
    while (cnt[s[right]] > 1) {
      cnt[s[left]] -= 1;
      left += 1;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
};



console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("au")); // 2
