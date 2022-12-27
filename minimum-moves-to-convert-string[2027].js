/**
 * @param {string} s
 * @return {number}
 * 
 * 这题滑窗前缀和 dp 均可
 * 这里用 dp
 */
var minimumMoves = function (s) {
  const len = s.length;
  const dp = new Array().fill(0);
  for (let i = 0; i < len; i++) {
    if (s[i] === 'O') dp[i] = i - 1 >= 0 ? dp[i - 1] : 0;
    else dp[i] = Math.min(i - 1 >= 0 ? dp[i - 1] : 0, i - 2 >= 0 ? dp[i - 2] : 0, i - 3 >= 0 ? dp[i - 3] : 0) + 1;
  }
  return dp[len - 1];
};








console.log(minimumMoves("XXX")); // 1
console.log(minimumMoves("XXOX")); // 2
console.log(minimumMoves("OOOO")); // 0
