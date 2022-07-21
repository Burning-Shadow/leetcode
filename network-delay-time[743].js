/**
 * 图的存储方式一般分为 3 种
 * 
 * 1. 邻接矩阵 ———— 二维数组，常用以存储稠密图
 * 2. 邻接表 ———— 与数组存储单链表的实现一致（头插法），适用于稀疏图
 * 3. 类存储 ———— 只有当我们需要确保某个操作复杂度严格为 O(m) 时，才会考虑使用
*/

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 * 
 * Dijkstra
 * https://leetcode.cn/problems/network-delay-time/solution/gong-shui-san-xie-yi-ti-wu-jie-wu-chong-oghpz/
 */
var networkDelayTime = function (times, n, k) {
  const INF = Number.MAX_SAFE_INTEGER;
  const graph = new Array(n).fill(INF).map(_ => new Array(n).fill(INF));

  // DAG 构建邻接矩阵
  for (const t of times) {
    const x = t[0] - 1, y = t[1] - 1;
    graph[x][y] = t[2];
  }

  const dist = new Array(n).fill(INF); // 距离默认设为正无穷
  dist[k - 1] = 0;
  const used = new Array(n).fill(false); // 是否更新

  // 遍历每个点，以该点为起始点寻找到达其他点的最短路径
  for (let i = 0; i < n; i++) {
    // 每次找到「最短距离最小」且「未被更新」的点 x
    let x = -1;
    for (let y = 0; y < n; y++) {
      if (!used[y] && (x === -1 || dist[y] < dist[x])) x = y;
    }
    // 标记点 x 为已更新
    used[x] = true;
    // console.log(`used = ${used}`);
    // 用点 x 的「最小距离」更新其他点
    for (let y = 0; y < n; y++) dist[y] = Math.min(dist[y], dist[x] + graph[x][y]);
    // console.log(`dist = ${dist}`);
  }

  let result = Math.max(...dist);
  return result === INF ? -1 : result;
};

console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2));  // 2
console.log(networkDelayTime([[1, 2, 1]], 2, 1)); // 1
console.log(networkDelayTime([[1, 2, 1]], 2, 2)); // -1