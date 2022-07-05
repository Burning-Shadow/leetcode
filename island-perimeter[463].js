/**
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function(grid) {
  let cnt = 0;
  const m = grid.length;
  const n = grid[0].length;

  const dfs = (i, j) => {
    // 从一个岛屿方格走向网格边界，周长加 1
    if (!(i >= 0 && i < m && j >= 0 && j < n)) return 1;
    // 从一个岛屿方格走向水域方格，周长加 1
    if (grid[i][j] === 0) return 1;
    if (grid[i][j] !== 1) return 0;

    grid[i][j] = 2;

    return dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1);
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) cnt += dfs(i, j);
    }
  }

  return cnt;
};

const grid = [
  [0,1,0,0],
  [1,1,1,0],
  [0,1,0,0],
  [1,1,0,0]
]; // 16

// const grid = [[1]]; // 4

// const grid = [[1,0]]; // 4

console.log(islandPerimeter(grid));
