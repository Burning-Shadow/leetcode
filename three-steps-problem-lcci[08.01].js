/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
  const MOD = 1e9 + 7;
  const dp = [null, 1, 2, 4];
  for (let i = 4; i <= n; i++) dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % MOD;
  return dp[n];
};

console.log(waysToStep(3)); // 4
console.log(waysToStep(5)); // 13