/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === '0') return 0;
  const len = s.length;
  const dp = new Array(len + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= len; i++) {
    if (s[i - 1] !== '0') dp[i] += dp[i - 1];
    if (i > 1 && s[i - 2] !== '0' && ((s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26)) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[len];
};

console.log(numDecodings("12")); // 2
console.log(numDecodings("226")); // 3
console.log(numDecodings("0")); // 0