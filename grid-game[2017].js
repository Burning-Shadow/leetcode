/**
 * @param {number[][]} grid
 * @return {number}
 * 
 * 题目里明确是两行所以可以不用 dp 那么麻烦
 */
const gridGame = grid => {
  const n = grid[0].length;
  // 分别计算两行的前缀和
  for (let j = 1; j < n; j++) {
    grid[0][j] += grid[0][j - 1];
    grid[1][j] += grid[1][j - 1];
  }
  let res = Infinity;
  for (let j = 0; j < n; j++) {
    // 机器人1任选一列j向下
    // 机器人2肯定会走第一行j的右边和第二行j的左边的最大值
    // 机器人1要让这个最大值最小
    res = Math.min(res, Math.max(grid[0][n - 1] - grid[0][j], grid[1][j - 1] || 0));
  }
  return res;
};

console.log(gridGame([
  [2, 5, 4],
  [1, 5, 1]
])); // 4
console.log(gridGame([
  [3, 3, 1],
  [8, 5, 2]
])); // 4
console.log(gridGame([
  [1, 3, 1, 15],
  [1, 3, 3, 1]
])); // 7
console.log(gridGame([
  [20, 3, 20, 17, 2, 12, 15, 17, 4, 15],
  [20, 10, 13, 14, 15, 5, 2, 3, 14, 3]
])); // 63