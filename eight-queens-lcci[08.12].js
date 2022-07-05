/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const vis = new Array(n).fill(0); // 初始化所有**列**的位置
  const res = [],
    flag = [],
    diagonals = [];
  for (let i = 0; i < n; i++) flag[i] = new Array(n).fill('.'); // 用 flag 表示棋盘，这里是初始化棋盘

  function NQueens(item, x) { // item 和 flag 都表示棋盘，一个是形参，一个是实参
    if (x == n) { // 设置递归条件，同时 x === n 说明所有行都找到了放置皇后的位置
      let temp = item.concat(); // 避免浅拷贝问题
      //将数组 ["Q",".",".","."] 转换为 [Q...]
      for (let i = 0; i < temp.length; i++) temp[i] = temp[i].join('');
      res.push(temp); // 添加答案
      return;
    }

    for (let i = 0; i < n; i++) {
      if (vis[i] == 0 && check(diagonals, x, i)) { // 判断当前列位置是否被使用和此位置是否与之前的保存的皇后位置构成对角线
        vis[i] = 1; // 将此列置为1，表示已经使用过了
        diagonals.push([x, i]); // 将放置过皇后的位置 (x,y) 记录下来
        item[x][i] = 'Q'; // 在棋盘位置放置皇后,也说明此行找到了皇后位置
        NQueens(item, x + 1) // 递归，寻找下一行的皇后位置
        vis[i] = 0; // 回溯
        diagonals.pop(); // 回溯
        item[x][i] = '.'; // 回溯
      }
    }
  }
  NQueens(flag, 0);

  return res;
};

function check(nums, x, y) { // 判断某位置与之前保存的皇后位置是否构成对角线
  for (let i = 0; i < nums.length; i++) { // 判断斜率是否为1
    if (Math.abs(nums[i][0] - x) === Math.abs(nums[i][1] - y)) return false;
  }
  return true;
}

console.log(solveNQueens(4));