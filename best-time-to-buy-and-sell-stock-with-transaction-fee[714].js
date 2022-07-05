/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices, fee) {
  const len = prices.length;
  const dp = new Array(len).fill(0).map(_ => new Array(2).fill(0));
  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }

  return Math.max(dp[len - 1][0], dp[len - 1][1]);
};

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2)); // 8
console.log(maxProfit([1, 3, 7, 5, 10, 3], 3)); // 6