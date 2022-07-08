/**
   * @param {string} s
   * @return {number}
   */
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  if (len < 2) return len;

  const set = new Set([s[0]]);

  let maxLen = 1,
    left = 0,
    right = 1;
  while (right < len) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    if (!set.has(s[right])) {
      set.add(s[right]);
      maxLen = Math.max(maxLen, right - left + 1);
      right++;
    }
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring('abba')); // 2
