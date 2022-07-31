/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 * 
 * 使用BFS查找从node1和node2到图中所有节点的最短距离。然后在所有节点上迭代，并找到最小最大距离的节点。
 */
var closestMeetingNode = function (edges, node1, node2) {
  if (node1 === node2) return node1;
  const n = edges.length;

  /** BFS 广度优先搜索
   * @param {number} node node1/node2
   * @return {number[]} 返回所有节点与 node 节点的距离
   */
  const findClosestDistance = (node) => {
    const distances = new Array(n).fill(-1);
    const visited = new Array(n).fill(false);
    const queue = [];
    queue.push(node);
    let level = -1;
    while (queue.length) {
      const cur = queue.shift();
      visited[cur] = true;
      ++level;
      distances[cur] = level;
      if (!visited[edges[cur]] && edges[cur] !== -1) {
        queue.push(edges[cur]);
      }
    }
    return distances;
  }
  const dis1 = findClosestDistance(node1);
  const dis2 = findClosestDistance(node2);

  let ans = -1;
  let minDis = Infinity;
  for (let i = 0; i < n; i++) {
    if (dis1[i] === -1 || dis2[i] === -1) { // node1 和 node 2 不在 i 节点相交
      continue;
    }
    // node1 和 node2 相交了
    if (Math.max(dis1[i], dis2[i]) < minDis) {
      minDis = Math.max(dis1[i], dis2[i]);
      ans = i;
    }
  }
  return ans;
};

/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 * 
 * 这条路走不通，如果出现样例 2 的情况那么 len2 为 0，而 len1 则只计算了 0 -> 1 的长度。还得 Dijistra
 */
// var closestMeetingNode = function (edges, node1, node2) {
//   if (node1 === node2) return node1;
//   const len = edges.length;
//   const map = {};
//   for (let i = 0; i < len; i++) map[edges[i]] = map[edges[i]] ? [...map[edges[i]], i] : [i];
//   console.log(map);

//   let len1 = Infinity,
//     len2 = Infinity;
//   const dfs = (node, path) => {
//     if (node == node1) {
//       len1 = Math.min(len1, path.length);
//       return;
//     }
//     if (node == node2) {
//       len2 = Math.min(len2, path.length);
//       return;
//     }
//     const list = map[node];
//     if (!list || !list.length) return;
//     for (const item of list) dfs(item, [...path, item]);
//   };

//   const mapKeys = Object.keys(map);
//   for (const key of mapKeys) {
//     if (key === '-1') continue;
//     dfs(key, []);
//   }

//   return len1 === Infinity || len2 === Infinity ? -1 : len1 + len2;
// };


console.log(closestMeetingNode([2, 2, 3, -1], 0, 1)); // 2
console.log(closestMeetingNode([1, 2, -1], 0, 2)); // 2
