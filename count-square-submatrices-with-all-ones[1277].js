/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  let cnt = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] !== 1) continue;

      if (i === 0 || j === 0) dp[i][j] === 1;
      else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        cnt += dp;
      }
    }
  }

  return cnt;
};
