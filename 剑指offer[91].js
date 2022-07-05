/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  const len = costs.length;
  const dp = new Array(len).fill(0).map(_ => new Array(3).fill(0));
  const [cost] = costs;
  dp[0][0] = cost[0];
  dp[0][1] = cost[1];
  dp[0][2] = cost[2];

  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i][1];
    dp[i][2] = Math.min(dp[i - 1][1], dp[i - 1][0]) + costs[i][2];
  }

  console.log(dp);
  return Math.min(dp[len - 1][0], dp[len - 1][1], dp[len - 1][2]);
};

console.log(minCost([[17,2,17],[16,16,5],[14,3,19]])); // 10
console.log(minCost([[7,6,2]])); // 2