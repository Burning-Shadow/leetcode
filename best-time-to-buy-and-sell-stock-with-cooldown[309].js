/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length;
  if (!len || len === 1) return 0;
  const dp = new Array(len).fill(0).map(() => new Array(3).fill(0));
  dp[0][0] = -prices[0];

  /**
   * dp[i][0]: 手上持有股票的最大收益
   * dp[i][1]: 手上无股票且在冷冻期的最大收益
   * dp[i][2]: 手上无股票且不在冷冻期的最大收益
  */
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
    dp[i][1] = dp[i - 1][0] + prices[i]
    dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2]);
  }

  return Math.max(dp[len - 1][1], dp[len - 1][2]);
};

console.log(maxProfit([1,2,3,0,2]));
console.log(maxProfit([1]));
