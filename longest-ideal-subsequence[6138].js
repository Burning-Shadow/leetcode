// https://leetcode.cn/contest/weekly-contest-305

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function (s, k) {
  const dp = new Array(s.length).fill(1);
  dp[0] = 1;

  for (let i = 1; i < s.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (Math.abs(s[i].charCodeAt() - s[j].charCodeAt()) <= k) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
        // 贪心？ 以字母a为例，下一个字母是a一定比b好。所以遍历到想同字母时，就没必要再向前遍历
        if (s[i] === s[j]) break;
      }
    }
  }

  let maxLen = 0;
  for (let i = 0; i < s.length; i++) maxLen = Math.max(maxLen, dp[i])

  return maxLen;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 
 * 缓存 26 个字母的方式更容易。完成统计后快慢指针也好 dp 也罢记录长度为 k 的子窗口即可
 */
var longestIdealString = function (s, k) {
  const arr = new Array(26).fill(0);
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s[i].charCodeAt() - 97;
    let max = 1;
    for (let j = c - k; j <= c + k; j++) {
      if (j < 0 || j > 25) continue;
      max = Math.max(max, arr[j] + 1);
    }
    arr[c] = max;
    maxLen = Math.max(maxLen, arr[c]);
  }

  return maxLen;
};

console.log(longestIdealString("acfgbd", 2)); // 4
console.log(longestIdealString("abcd", 3)); // 4