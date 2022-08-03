/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const grid = new Array(n).fill(0).map(_ => new Array(m).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      grid[j][i] = matrix[i][j];
    }
  }

  return grid;
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [[1,4,7],[2,5,8],[3,6,9]]
console.log(transpose([[1, 2, 3], [4, 5, 6]])); // [[1,4],[2,5],[3,6]]