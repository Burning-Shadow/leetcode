/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 
 * 经典 dfs 遍历
 * 但需要注意的是要将使用过的 i、j 坐标进行置灰，避免重复使用
 */
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;
  const len = word.length;

  const dfs = (i, j, idx) => {
    if (len === idx) return true;
    if (
      i >= m
      || i < 0
      || j >= n
      || j < 0
      || board[i][j] !== word[idx]
    ) return false;
    const temp = board[i][j];
    board[i][j] = false;
    if (dfs(i + 1, j, idx + 1)) return true;
    if (dfs(i - 1, j, idx + 1)) return true;
    if (dfs(i, j + 1, idx + 1)) return true;
    if (dfs(i, j - 1, idx + 1)) return true;
    board[i][j] = temp;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true;
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