/**
 * @param {number[][]} grid
 * @return {number[][]}
 * 
 * https://leetcode.cn/contest/weekly-contest-306
 * 暴力求解
 */
var largestLocal = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const newGrid = new Array(m - 2).fill(0).map(_ => new Array(n - 2).fill(0));

  for (let i = 0; i < m - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      newGrid[i][j] = Math.max(grid[i][j], grid[i][j + 1], grid[i][j + 2], grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2], grid[i + 2][j], grid[i + 2][j + 1], grid[i + 2][j + 2]);
      // console.log(`i = ${i}, j = ${j}, newGrid[i][j] = ${newGrid[i][j]}`);
    }
  }

  return newGrid;
};

/**
 * @param {number[][]} grid
 * @return {number[][]}
 * 
 * https://leetcode.cn/contest/weekly-contest-306
 * 原地修改【存储在左上角不会被覆盖】
 */
 var largestLocal = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      grid[i][j] = Math.max(grid[i][j], grid[i][j + 1], grid[i][j + 2], grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2], grid[i + 2][j], grid[i + 2][j + 1], grid[i + 2][j + 2]);
    }
    grid[i].pop();
    grid[i].pop();
  }
  grid.pop();
  grid.pop();

  return grid;
};

console.log(largestLocal([[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]])); // [[9,9],[8,6]]
console.log(largestLocal([[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 2, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]])); // [[2,2,2],[2,2,2],[2,2,2]]