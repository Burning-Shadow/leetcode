/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const len = grid.length;
  let cnt = 0;

  const check = (row, col) => {
    for (let i = 0; i < len; i++) {
      if (grid[row][i] != grid[i][col]) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (check(i, j)) cnt += 1;
    }
  }

  return cnt;
};

console.log(equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]])); // 1
console.log(equalPairs([[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]])); // 3