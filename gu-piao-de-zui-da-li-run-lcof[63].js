/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = prices[0], maxProfit = 0;

  for (const price of prices) {
    if (price < minPrice) minPrice = price
    else if (price - minPrice > maxProfit) maxProfit = price - minPrice;
  }
  return maxProfit
};

// 这个是多次买入卖出的，题设是一次。所以找最高点最低点就可
/*
var maxProfit = function(prices) {
  const len = prices.length;
  const dp = new Array(len).fill(0).map(() => new Array(2).fill(0));
  dp[0][0] = -prices[0];

  //  * 两种情况:
  //  *  持有态 0 列
  //  *  非持有态 1 列
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][1] - prices[i], dp[i - 1][0]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }

  return Math.max(dp[len - 1][0], dp[len - 1][1]);
};
*/

console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0
