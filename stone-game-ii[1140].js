/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
  // 动态规划两步，1、定义状态 2、定义状态转移方程
  // dp[i] 表示从 i 到 piles.length - 1 这个区间，M 条件下
  // Alex 先手，Alex 可以得到最大石头数量
  // 状态转移方程：dp[i][m] = Math.max(dp[i][m], sum - dp[i + x][Math.max(m, x)])
  // x 取值 1 ~ 2m
  if (piles.length === 0) return 0
  const n = piles.length, mLen = Math.ceil(n / 2)
  const dp = new Array(n)
  for (let i = 0; i < n; i++) {
    const item = new Array(mLen)
    item.fill(0)
    dp[i] = item
  }
  let sum = 0
  for (let i = n - 1; i >= 0; i--) {
    sum += piles[i]
    for (let m = mLen; m >= 1; m--) {
      if (2 * m >= n - i) {
        dp[i][m] = sum
      } else {
        // x 取值 1 ~ 2m
        for (let x = 1; x <= 2 * m; x++) {
          // dp[i][m] 的默认值为 0
          dp[i][m] = Math.max(dp[i][m], sum - dp[i + x][Math.max(m, x)])
        }
      }
    }
  }
  return dp[0][1]
};






console.log(stoneGameII([2, 7, 9, 4, 4])); // 10
console.log(stoneGameII([1, 2, 3, 4, 5, 100])); // 104
