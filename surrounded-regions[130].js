/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solve = function (board) {
  const m = board.length,
    n = board[0].length;
  const dfs = (r, c) => {
    if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== 'O') return;
    board[r][c] = 'A';
    dfs(r, c + 1);
    dfs(r, c - 1);
    dfs(r + 1, c);
    dfs(r - 1, c);
  }

  for (let i = 0; i < n; i++) {
    dfs(0, i);
    dfs(m - 1, i);
  }
  for (let i = 1; i < m - 1; i++) {
    dfs(i, 0);
    dfs(i, n - 1);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'A') {
        board[i][j] = 'O';
      } else {
        board[i][j] = 'X';
      }
    }
  }

  return board;
};


console.log(solve([["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]])); // [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
console.log(solve([["X"]])); // [["X"]]