/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid) return 0;
  let cnt = 0;
  const m = grid.length;
  if (!m) return 0;
  const n = grid[0].length;
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        cnt += 1;
        grid[i][j] = '0';
        const neighbors = [];
        neighbors.push([i, j]);

        while(neighbors.length) {
          const point = neighbors.shift();
          const [p, q] = point;

          if (p - 1 >= 0 && grid[p - 1][q] === '1') {
            grid[p - 1][q] = '0';
            neighbors.push([p - 1, q]);
          }
          if (p + 1 < m && grid[p + 1][q] === '1') {
            grid[p + 1][q] = '0';
            neighbors.push([p + 1, q]);
          }
          if (q - 1 >= 0 && grid[p][q - 1] === '1') {
            grid[p][q - 1] = '0';
            neighbors.push([p, q - 1]);
          }
          if (q + 1 < n && grid[p][q + 1] === '1') {
            grid[p][q + 1] = '0';
            neighbors.push([p, q + 1]);
          }
        }
      }
    }
  }

  return cnt;
};

/**
 * @param {character[][]} grid
 * @return {number}
 * 
 * dfs，改变原数组
 */
 var numIslands = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let cnt = 0;

  const judgeLeagal = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n) return false;
    return true;
  };

  const dfs = (i, j) => {
    if (!judgeLeagal(i, j) || grid[i][j] === '0') return;
    grid[i][j] = '0';
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        cnt++;
        dfs(i, j);
      }
    }
  }

  return cnt;
};

const grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]; // 1

// const grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["1","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]; // 3

// const grid = [
//   ["1","1","1"],
//   ["0","1","0"],
//   ["0","1","0"]
// ] // 1

// const grid = [
//   ["0", "0"],
//   ["0", "0"]
// ]; // 0

console.log(numIslands(grid));