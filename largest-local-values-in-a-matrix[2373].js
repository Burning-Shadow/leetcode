/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const n = grid.length;
  const result = new Array(n - 2).fill(0).map(() => new Array(n - 2).fill(0));
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          result[i][j] = Math.max(result[i][j], grid[x][y]);
        }
      }
    }
  }
  return result;
};





console.log(largestLocal([[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]])); // [[9,9],[8,6]]
console.log(largestLocal([[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]])); // [[2,2,2],[2,2,2],[2,2,2]]
