/**
 * @param {string} s
 * @return {string}
 * 
 * dp[i][j] 表示 s[i...j] 组成的串是否为回文串
 */
// var longestPalindrome = function (s) {
//   if (!s) return;
//   const len = s.length;
//   if (!len) return
//   const dp = new Array(len).fill(0).map(_ => new Array(len).fill(false));
//   let maxLen = 1, startIdx = 0;

//   for (let i = 0; i < len; i++) dp[i][i] = true;

//   for (let j = 1; j < len; j++) {
//     for (let i = 0; i <= j; i++) {
//       if (s[i] === s[j]) {
//         if (j - 1 - (i + 1) < 2) dp[i][j] = true;
//         else dp[i][j] = dp[i + 1][j - 1];
//       }

//       if (dp[i][j] && j - i + 1 > maxLen) {
//         maxLen = j - i + 1;
//         startIdx = i;
//       }
//     }
//   }

//   return s.substring(startIdx, startIdx + maxLen);
// };

/**
 * @param {string} s
 * @return {string}
 * 
 * 中心扩散法 ———— 遍历下标向两边扩散【注意处理奇偶】
 */
var longestPalindrome = function (s) {
  let max = ''

  for (let i = 0; i < s.length; i++) {
    helper(i, i)
    helper(i, i + 1)
  }

  function helper(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
    }
    const maxStr = s.slice(left + 1, right + 1 - 1);
    if (maxStr.length > max.length) max = maxStr
  }
  return max
};

console.log(longestPalindrome("babad")); // "bab" || "aba"
console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome("ccc")); // "ccc"
console.log(longestPalindrome("cbbd")); // "bb"