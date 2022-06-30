/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  xL = grid[0].length - 1;
  yL = grid.length - 1;

  for (let q = 0; q < k; q++) {
    let lastItem = grid[yL][xL];
    for (let y = yL; y >= 1; y--) {
      grid[y].splice(xL, 1);
      grid[y].unshift(grid[y - 1][xL]);
    }
    grid[0].splice(xL, 1);
    grid[0].unshift(lastItem);
  }
  return grid;
};
