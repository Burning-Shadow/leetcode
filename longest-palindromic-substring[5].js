/**
 * @param {string} s
 * @return {string}
 * 
 * dp[i][j] 表示 s[i...j] 组成的串是否为回文串
 */
var longestPalindrome = function (s) {
  if (!s) return;
  const len = s.length;
  if (!len) return
  const dp = new Array(len).fill(0).map(_ => new Array(len).fill(false));
  let maxLen = 1, startIdx = 0;

  for (let i = 0; i < len; i++) dp[i][i] = true;

  for (let j = 1; j < len; j++) {
    for (let i = 0; i <= j; i++) {
      if (s[i] === s[j]) {
        if (j - 1 - (i + 1) < 2) dp[i][j] = true;
        else dp[i][j] = dp[i + 1][j - 1];
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        startIdx = i;
      }
    }
  }

  return s.substring(startIdx, startIdx + maxLen);;
};

console.log(longestPalindrome("babad")); // "bab" || "aba"
console.log(longestPalindrome("cbbd")); // "bb"