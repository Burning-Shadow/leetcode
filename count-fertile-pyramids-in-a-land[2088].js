/**
 * @param {number[][]} grid
 * @return {number}
 * 
 * 计算出以每一个位置 (i,j) 为顶端的最大的金字塔的高度
 * 大金字塔拆成小金字塔
 */
var countPyramids = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(m).fill(0).map(_ => new Array(n).fill(0));
  let result = 0;

  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) dp[i][j] = -1;
      else if (j === 0 || j === n - 1 || i === m - 1) dp[i][j] = 0;
      else {
        dp[i][j] = Math.min(dp[i + 1][j - 1], dp[i + 1][j], dp[i + 1][j + 1]) + 1;
        result += dp[i][j];
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) dp[i][j] = -1;
      else if (j === 0 || j === n - 1 || i === 0) dp[i][j] = 0;
      else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]) + 1;
        result += dp[i][j];
      }
    }
  }

  return result;
};

console.log(countPyramids([[0,1,1,0],[1,1,1,1]])); // 2
console.log(countPyramids([[1,1,1],[1,1,1]])); // 2
console.log(countPyramids([[1,0,1],[0,0,0],[1,0,1]])); // 0
console.log(countPyramids([[1,1,1,1,0],[1,1,1,1,1],[1,1,1,1,1],[0,1,0,0,1]])); // 13
