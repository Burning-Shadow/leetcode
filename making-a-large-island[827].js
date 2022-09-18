/**
 * @param {number[][]} grid
 * @return {number}
 */
function largestIsland(grid) {
  const dfs = (i, j, key) => {
    // 越界 || 水域
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === 0) return 0;
    // 已经遍历过
    if (grid[i][j] === key) return 0;

    // 遍历并编号
    grid[i][j] = key;
    return 1 + dfs(i + 1, j, key) + dfs(i - 1, j, key) + dfs(i, j + 1, key) + dfs(i, j - 1, key);
  }

  // 给岛屿编号，从2开始
  let key = 2;
  const m = new Map();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        m.set(key, dfs(i, j, key));
        key++;
      }
    }
  }

  console.log(m);

  // 如果没有水域 || 没有岛屿
  let result = m.get(2) ?? 1; // result = m.get(2) ? m.get(2) : 1;
  const moves = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) {
        // 获取 水域 四周的岛屿编号
        let sizes = moves.map(([dx, dy]) => {
          return grid[i + dx]?.[j + dy];
        }).filter(i => i >= 2);
        // 去重之后的岛屿面积
        sizes = [...new Set(sizes)].map(k => m.get(k));
        // 联通岛屿后面积
        result = Math.max(result, sizes.reduce((a, c) => a + c, 0) + 1);
      }
    }
  }

  return result;
};

console.log(largestIsland([[1, 0], [0, 1]])); // 3
console.log(largestIsland([[1, 1], [1, 0]])); // 4
console.log(largestIsland([[1, 1], [1, 1]])); // 4