/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (!amount) return 0;
  coins.sort((a, b) => a - b);
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      idx = i - coin;
      if (idx >= 0) dp[i] = Math.min(dp[i], dp[idx] + 1);
    }
  }

  return dp[amount] > amount ? -1: dp[amount];
};

console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 3)); // -1
console.log(coinChange([1], 0)); // 0
console.log(coinChange([186, 419, 83, 408], 6249)); // 20