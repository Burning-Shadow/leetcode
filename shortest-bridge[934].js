/**
 * @param {number[][]} grid
 * @return {number}
 * 
 * 广搜。找到第一座岛屿后不断向外延伸一圈，直到找到另一座岛
 */
var shortestBridge = function (grid) {
  const n = grid.length;
  const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];
  const island = [];
  const queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j]);
        grid[i][j] = -1;
        while (queue.length !== 0) {
          const cell = queue.shift();
          let x = cell[0], y = cell[1];
          island.push(cell);
          for (let k = 0; k < 4; k++) {
            let nx = x + dirs[k][0];
            let ny = y + dirs[k][1];
            if (nx >= 0 && ny >= 0 && nx < n && ny < n && grid[nx][ny] == 1) {
              queue.push([nx, ny]);
              grid[nx][ny] = -1;
            }
          }
        }
        for (const cell of island) {
          queue.push(cell);
        }
        let step = 0;
        while (queue.length !== 0) {
          const sz = queue.length;
          for (let k = 0; k < sz; k++) {
            const cell = queue.shift();
            let x = cell[0], y = cell[1];
            for (let d = 0; d < 4; d++) {
              let nx = x + dirs[d][0];
              let ny = y + dirs[d][1];
              if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
                if (grid[nx][ny] === 0) {
                  queue.push([nx, ny]);
                  grid[nx][ny] = -1;
                } else if (grid[nx][ny] === 1) {
                  return step;
                }
              }
            }
          }
          step++;
        }
      }
    }
  }
  return 0;
};

/**
 * @param {number[][]} grid
 * @return {number}
 * 
 * 广搜 + 深搜
 * 找到一座岛后依次深搜，取小值
 */
var shortestBridge = function (grid) {
  const n = grid.length;
  const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const queue = [];
        dfs(i, j, grid, queue);
        let step = 0;
        while (queue.length !== 0) {
          const sz = queue.length;
          for (let k = 0; k < sz; k++) {
            const cell = queue.shift();
            let x = cell[0], y = cell[1];
            for (let d = 0; d < 4; d++) {
              let nx = x + dirs[d][0];
              let ny = y + dirs[d][1];
              if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
                if (grid[nx][ny] === 0) {
                  queue.push([nx, ny]);
                  grid[nx][ny] = -1;
                } else if (grid[nx][ny] === 1) {
                  return step;
                }
              }
            }
          }
          step++;
        }
      }
    }
  }
  return 0;
}

const dfs = (x, y, grid, queue) => {
  if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] !== 1) {
    return;
  }
  queue.push([x, y]);
  grid[x][y] = -1;
  dfs(x - 1, y, grid, queue);
  dfs(x + 1, y, grid, queue);
  dfs(x, y - 1, grid, queue);
  dfs(x, y + 1, grid, queue);
};




console.log(shortestBridge([[0, 1], [1, 0]])); // 1
console.log(shortestBridge([[0, 1, 0], [0, 0, 0], [0, 0, 1]])); // 2
console.log(shortestBridge([[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]])); // 1
