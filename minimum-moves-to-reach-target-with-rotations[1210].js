/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function (grid) {
  const INVALID = Number.MAX_VALUE;
  const n = grid.length;
  const f = new Array(n).fill(0).map(() => new Array(n).fill(0).map(() => new Array(2).fill(INVALID)));
  f[0][0][0] = 0;

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      const canHorizontal = (j + 1 < n && grid[i][j] === 0 && grid[i][j + 1] === 0);
      const canVertical = (i + 1 < n && grid[i][j] === 0 && grid[i + 1][j] === 0);

      if (i - 1 >= 0 && canHorizontal) {
        f[i][j][0] = Math.min(f[i][j][0], f[i - 1][j][0] + 1);
      }
      if (j - 1 >= 0 && canHorizontal) {
        f[i][j][0] = Math.min(f[i][j][0], f[i][j - 1][0] + 1);
      }
      if (i - 1 >= 0 && canVertical) {
        f[i][j][1] = Math.min(f[i][j][1], f[i - 1][j][1] + 1);
      }
      if (j - 1 >= 0 && canVertical) {
        f[i][j][1] = Math.min(f[i][j][1], f[i][j - 1][1] + 1);
      }

      if (canHorizontal && canVertical && grid[i + 1][j + 1] === 0) {
        f[i][j][0] = Math.min(f[i][j][0], f[i][j][1] + 1);
        f[i][j][1] = Math.min(f[i][j][1], f[i][j][0] + 1);
      }
    }
  }

  return (f[n - 1][n - 2][0] === INVALID ? -1 : f[n - 1][n - 2][0]);
};






console.log(minimumMoves([
  [0, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0, 0],
])); // 11
console.log(minimumMoves([
  [0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 1],
  [1, 1, 1, 0, 0, 1],
  [1, 1, 1, 0, 0, 0],
])); // 9
