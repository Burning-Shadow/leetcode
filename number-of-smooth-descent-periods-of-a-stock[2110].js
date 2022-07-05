/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function (prices) {
  const len = prices.length;
  const dp = new Array(len).fill(1);

  for (let i = 1; i < len; i++) {
    if (prices[i] === prices[i - 1] - 1) dp[i] = dp[i - 1] + 1;
  }

  return dp.reduce((total, curr) => total + curr, 0);
};

console.log(getDescentPeriods([3, 2, 1, 4])); // 7
console.log(getDescentPeriods([8, 6, 7, 7])); // 4
console.log(getDescentPeriods([1])); // 1