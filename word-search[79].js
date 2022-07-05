/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const [startWord] = word;
  const m = board.length;
  const n = board[0].length;
  const len = word.length;

  const dfs = (i, j, compareIndex) => {
    if (len === compareIndex) return true;
    if (
      i >= 0
      && i < m
      && j >= 0
      && j < n
      && word[compareIndex] === board[i][j]
    ) {
      console.log(board[i][j]);
      const temp = board[i][j];
      board[i][j] = false;
      if (dfs(i + 1, j, compareIndex + 1)) return true;
      if (dfs(i - 1, j, compareIndex + 1)) return true;
      if (dfs(i, j + 1, compareIndex + 1)) return true;
      if (dfs(i, j - 1, compareIndex + 1)) return true;
      board[i][j] = temp;
    }
    return false;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === startWord && dfs(i, j, 0)) return true;
    }
  }
  return false;
};

console.log(exist([
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"]
], "ABCCED")); // true
console.log(exist([
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"]
], "SEE")); // true
console.log(exist([
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"]
], "ABCB")); // false