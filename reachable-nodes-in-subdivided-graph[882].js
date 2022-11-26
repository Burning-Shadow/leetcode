/**
 * @param {number[][]} edges
 * @param {number} maxMoves
 * @param {number} n
 * @return {number}
 */
var reachableNodes = function (edges, maxMoves, n) {
  const g = Array.from({ length: n }, () => []);
  let ans = 0;

  // 建立无向图领接表，cnt+1代表两个节点之间的距离(权重)
  for (let i = 0; i < edges.length; i++) {
    const [u, v, cnt] = edges[i];
    g[u].push([v, cnt + 1]);
    g[v].push([u, cnt + 1]);
  }

  // 计算图中0到每个节点的最短路径
  const distance = dijkstra(g, 0);

  // 对于节点，只要与0的最短路径小于等于maxMoves，就可以访问到
  for (let i = 0; i < distance.length; i++) {
    if (distance[i] <= maxMoves) {
      ans++;
    }
  }

  // 对于边，从u节点往v节点可以多走 maxMoves - distance[u]，从v节点往u节点可以多走 maxMoves - distance[v]
  for (let i = 0; i < edges.length; i++) {
    const [u, v, cnt] = edges[i];
    // u -> v 多走的节点数，可能到达不了u，所以兜底是0
    const a = Math.max(maxMoves - distance[u], 0)
    // v -> u
    const b = Math.max(maxMoves - distance[v], 0);
    // 中间新节点数最多不超cnt
    const c = Math.min(a + b, cnt);
    // 多走的节点进行累加
    ans += c;
  }

  return ans;
};

var dijkstra = function (g, start) {
  // 初始化结果
  const dis = new Array(g.length).fill(Number.MAX_VALUE);
  dis[start] = 0;
  // 队列
  const queue = [[start, 0]]

  // 直到堆为空
  while (queue.length) {
    const [v, d] = queue.shift();
    // 可能遍历其他节点时，dis[v]已经变短了，此时这条路径作废
    if (d > dis[v]) continue;
    // 遍历v节点连接的其他节点
    for (let i = 0; i < g[v].length; i++) {
      const [u, weight] = g[v][i];
      // 计算当前路径到达u的距离
      const newDis = weight + dis[v];
      // 如果当前路径变成了最小路径，那从u节点往后走的路径都有可能变小，所以插入堆中
      if (newDis < dis[u]) {
        // 更新短路径
        dis[u] = newDis;
        // 插入队列中
        queue.push([u, newDis])
      }
    }
  }

  return dis;
}





console.log(reachableNodes([[0, 1, 10], [0, 2, 1], [1, 2, 2]], 6, 3)); // 13
console.log(reachableNodes([[0, 1, 4], [1, 2, 6], [0, 2, 8], [1, 3, 1]], 10, 4)); // 23
console.log(reachableNodes([[1, 2, 4], [1, 4, 5], [1, 3, 1], [2, 3, 4], [3, 4, 5]], 17, 5)); // 1
