/**
 * @param {string[]} grid
 * @return {number}
 * 
 * bfs + 状压
 * 若单纯为在有边界和墙的 grid 内寻找物品最少步数，那 bfs 即可胜任
 * 但加上了钥匙和锁的概念，那么就需要用到三元组 (x, y, mask) 去存储。x、y分别代表坐标点，而 mask 则为一个二进制数组，其第 i 个二进制位 为 1 则代表已获得网格中第 i 把钥匙
 */
const direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];
var shortestPathAllKeys = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  let startX = 0, startY = 0;
  const keyToIndex = new Map();

  // 遍历寻找起点 & 钥匙
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === '@') {
        startX = i;
        startY = j;
      } else if ('a' <= grid[i][j] && grid[i][j] <= 'z') {
        if (!keyToIndex.has(grid[i][j])) {
          const idx = keyToIndex.size;
          keyToIndex.set(grid[i][j], idx);
        }
      }
    }
  }

  const isPositionLeagal = (x, y) => x >= 0 && x < m && y >= 0 && y < n && grid[x][y] !== '#';
  const isSpaceEmpty = (x, y) => grid[x][y] === '.' || grid[x][y] === '@';
  const isKey = (x, y) => 'a' <= grid[x][y] && grid[x][y] <= 'z';

  const queue = [];
  // 三维数组，记录 (x, y) 坐标点下已获得的钥匙
  const dist = new Array(m).fill(0).map(() => new Array(n).fill(0).map(() => new Array(1 << keyToIndex.size).fill(-1)));
  queue.push([startX, startY, 0]);
  dist[startX][startY][0] = 0;

  while (queue.length) {
    const arr = queue.shift();
    const [x, y, mask] = arr;
    // 遍历四个可选方向
    for (let i = 0; i < 4; ++i) {
      let nextX = x + direction[i][0];
      let nextY = y + direction[i][1];
      if (isPositionLeagal(nextX, nextY)) {
        if (isSpaceEmpty(nextX, nextY)) {
          if (dist[nextX][nextY][mask] === -1) {
            dist[nextX][nextY][mask] = dist[x][y][mask] + 1;
            queue.push([nextX, nextY, mask]);
          }
        } else if (isKey(nextX, nextY)) {
          const idx = keyToIndex.get(grid[nextX][nextY]);
          if (dist[nextX][nextY][mask | (1 << idx)] === -1) {
            dist[nextX][nextY][mask | (1 << idx)] = dist[x][y][mask] + 1;
            if ((mask | (1 << idx)) === (1 << keyToIndex.size) - 1) {
              // console.log('keyToIndex = ', keyToIndex);
              return dist[nextX][nextY][mask | (1 << idx)];
            }
            queue.push([nextX, nextY, mask | (1 << idx)]);
          }
        } else {
          const idx = keyToIndex.get(grid[nextX][nextY].toLowerCase());
          if ((mask & (1 << idx)) !== 0 && dist[nextX][nextY][mask] === -1) {
            dist[nextX][nextY][mask] = dist[x][y][mask] + 1;
            queue.push([nextX, nextY, mask]);
          }
        }
      }
    }
  }

  // console.log('keyToIndex = ', keyToIndex);
  return -1;
};



console.log(shortestPathAllKeys(["@.a.#", "###.#", "b.A.B"])); // 8
console.log(shortestPathAllKeys(["@..aA", "..B#.", "....b"])); // 6
console.log(shortestPathAllKeys(["@Aa"])); // -1
