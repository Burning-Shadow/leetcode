// https://leetcode.cn/contest/weekly-contest-305

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 * 
 * 内存空间开辟过多导致堆栈溢出
 */
var reachableNodes = function (n, edges, restricted) {
  let cnt = 1;
  const grid = new Array(n).fill(false).map(() => new Array(n).fill(false));

  for (const edge of edges) {
    const [point1, point2] = edge;
    if (restricted.includes(point1) || restricted.includes(point2)) continue;
    grid[point1][point2] = true;
    grid[point2][point1] = true;
  }

  const visited = new Set();
  const dfs = (row) => {
    for (let i = 1; i < n; i++) {
      if (grid[row][i] && !visited.has(i)) {
        cnt += 1;
        visited.add(i);
        dfs(i);
      }
    }
  };

  dfs(0);

  return cnt;
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 * 
 * 尽可能少的使用邻接矩阵
 */

var reachableNodes = function (n, edges, restricted) {
  const visited = new Array(n);
  const graph = new Array(n).fill(0).map(() => []);
  let cnt = 0;

  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const dfs = (node) => {
    visited[node] = 1;
    cnt++;
    for (const neighbor of graph[node]) {
      if (visited[neighbor]) continue;
      dfs(neighbor);
    }
  }

  // 认为受限的访问过即可，不对结果造成影响  
  for (const val of restricted) visited[val] = 1;

  dfs(0);

  return cnt;
};

console.log(reachableNodes(7, [[0, 1], [1, 2], [3, 1], [4, 0], [0, 5], [5, 6]], [4, 5])); // 4
console.log(reachableNodes(7, [[0, 1], [0, 2], [0, 5], [0, 4], [3, 2], [6, 5]], [4, 2, 1])); // 3
console.log(reachableNodes(2, [[0, 1]], [1])); // 1