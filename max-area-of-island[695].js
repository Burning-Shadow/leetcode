/**
 * @param {number[][]} grid
 * @return {number}
 * 
 * dfs
 */
var maxAreaOfIsland = function (grid) {
  let maxArea = 0;
  const m = grid.length;
  const n = grid[0].length;
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  const dfs = (i, j) => {
    // 排除边界值，越界部分不算面积
    if (i < 0 || j < 0 || i === m || j === n || grid[i][j] !== 1) return 0;
    // 计算过的内容置 0
    grid[i][j] = 0;
    let cnt = 1;
    for (const direction of directions) cnt += dfs(i + direction[0], j + direction[1]);

    return cnt;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) maxArea = Math.max(maxArea, dfs(i, j));
    }
  }

  return maxArea;
};


/**
 * @param {number[][]} grid
 * @return {number}
 * 
 * bfs
 */
 var maxAreaOfIsland = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let maxArea = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const queue = [[i, j]];
        grid[i][j] = 0;
        let area = 0;
        while (queue.length) {
          const [curI, curJ] = queue.shift();
          area++;
          [[-1, 0], [0, 1], [1, 0], [0, -1]].forEach(item => {
            const x = curI + item[0];
            const y = curJ + item[1];
            if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === 1) {
              queue.push([x, y]);
              grid[x][y] = 0;
            }
          });
        }
        maxArea = Math.max(maxArea, area);
      }
    }
  }
  return maxArea;
};

const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
];

console.log(maxAreaOfIsland(grid));
