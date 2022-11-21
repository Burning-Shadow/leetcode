/**
 * @param {number} n
 * @return {number}
 * 
 * dp
 * https://leetcode.cn/problems/soup-servings/solutions/1981704/fen-tang-by-leetcode-solution-0yxs/
 */
var soupServings = function (n) {
  n = Math.ceil(n / 25);
  if (n >= 179) {
    return 1.0;
  }
  const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
  dp[0][0] = 0.5;
  for (let i = 1; i <= n; i++) {
    dp[0][i] = 1.0;
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = (dp[Math.max(0, i - 4)][j] + dp[Math.max(0, i - 3)][Math.max(0, j - 1)] + dp[Math.max(0, i - 2)][Math.max(0, j - 2)] + dp[Math.max(0, i - 1)][Math.max(0, j - 3)]) / 4.0;
    }
  }
  return dp[n][n];
};


/**
 * @param {number} n
 * @return {number}
 * 
 * 记忆化搜索
 */
var soupServings = function (n) {
  n = Math.ceil(n / 25);
  if (n >= 179) {
    return 1.0;
  }
  const memo = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
  const dfs = (a, b) => {
    if (a <= 0 && b <= 0) {
      return 0.5;
    } else if (a <= 0) {
      return 1;
    } else if (b <= 0) {
      return 0;
    }
    if (memo[a][b] === 0) {
      memo[a][b] = 0.25 * (dfs(a - 4, b) + dfs(a - 3, b - 1) + dfs(a - 2, b - 2) + dfs(a - 1, b - 3));
    }
    return memo[a][b];
  };
  return dfs(n, n);
};





console.log(soupServings(50)); // 0.62500
console.log(soupServings(100)); // 0.71875
