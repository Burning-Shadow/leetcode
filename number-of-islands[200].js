/**
 * @param {character[][]} grid
 * @return {number}
 */
//  var numIslands = function(grid) {
//   let cnt = 0;
//   const m = grid.length;
//   const n = grid[0].length;

//   // 建立二维数组
//   let dp = new Array(m).fill('0').map(() => new Array(n).fill('0'));

//   const dfs = (i, j) => {
//     if (grid[i][j] === '1' && dp[i][j] === '0') {
//       dp[i][j] = '1';
//       if (i - 1 >= 0 && grid[i - 1][j] === '1' && dp[i - 1][j] === '0') dfs(i - 1, j);
//       if (i + 1 < m && grid[i + 1][j] === '1' && dp[i + 1][j] === '0') dfs(i + 1, j);
//       if (j - 1 >= 0 && grid[i][j - 1] === '1' && dp[i][j - 1] === '0') dfs(i, j - 1);
//       if (j + 1 < n && grid[i][j + 1] === '1' && dp[i][j + 1] === '0') dfs(i, j + 1);
//     }
//   };

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (grid[i][j] === '1' && dp[i][j] === '0') {
//         cnt += 1;
//         dfs(i, j);
//       }
//     }
//   }

//   return cnt;
// };

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