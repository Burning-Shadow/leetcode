/**
 * @param {character[][]} board
 * @return {boolean}
 * 
 * 每行、每列、每个九宫格内一个数字只会出现一次
 * 逐个遍历即可，时间复杂度 O(1)
 */
var isValidSudoku = function (board) {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const subboxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = board[i][j];
      if (cell !== '.') {
        const index = cell.charCodeAt() - '0'.charCodeAt() - 1;
        rows[i][index]++;
        columns[j][index]++;
        subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++;
        if (
          rows[i][index] > 1
          || columns[j][index] > 1
          || subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1
        ) {
          return false;
        }
      }
    }
  }
  return true;
};


console.log(isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."]
  , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
  , [".", "9", "8", ".", ".", ".", ".", "6", "."]
  , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
  , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
  , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
  , [".", "6", ".", ".", ".", ".", "2", "8", "."]
  , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
  , [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]));
console.log(isValidSudoku([
  ["8", "3", ".", ".", "7", ".", ".", ".", "."]
  , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
  , [".", "9", "8", ".", ".", ".", ".", "6", "."]
  , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
  , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
  , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
  , [".", "6", ".", ".", ".", ".", "2", "8", "."]
  , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
  , [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]));