/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const len = n < 3 ? 3 : n;
  const dp = new Array(len).fill(0);
  dp[0] = 1, dp[1] = 2, dp[2] = 3;

  for (let i = 3; i < len; i++) dp[i] = dp[i - 1] + dp[i - 2];

  return dp[n - 1];
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
