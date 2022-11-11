/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const dp = new Array(m).fill(0).map(_ => new Array(n).fill(0));

  dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;
  for (let i = 1; i < m; i++) dp[i][0] = Number(dp[i - 1][0] && obstacleGrid[i][0] === 0);
  for (let i = 1; i < n; i++) dp[0][i] = Number(dp[0][i - 1] && obstacleGrid[0][i] === 0);

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) continue;
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  console.log(dp);
  return dp[m - 1][n - 1];
};


console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])); // 2
console.log(uniquePathsWithObstacles([[0, 1], [0, 0]])); // 1
console.log(uniquePathsWithObstacles([[0, 0]])); // 1
console.log(uniquePathsWithObstacles([[1, 0]])); // 0
console.log(uniquePathsWithObstacles([[0, 0], [1, 1], [0, 0]])); // 0
