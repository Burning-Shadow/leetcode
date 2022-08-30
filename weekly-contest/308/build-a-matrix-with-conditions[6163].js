/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 * 
 * 行列拓扑排序
 */
var buildMatrix = function (k, rowConditions, colConditions) {
  const row = topoSort(k, rowConditions);
  const col = topoSort(k, colConditions);
  if (row.length < k || col.length < k) {
    return [];
  }

  const ans = new Array(k).fill(0).map(() => new Array(k).fill(0));
  const pos = new Array(k).fill(0).map(() => []); // Array<x, y>

  // 构建坐标
  for (let i = 0; i < row.length; i++) {
    pos[row[i]][0] = i;
    pos[col[i]][1] = i;
  }

  // 按照坐标填入矩阵
  for (let i = 0; i < k; i++) {
    const [x, y] = pos[i];
    ans[x][y] = i + 1;
  }

  return ans;
};

function topoSort(n, edges) {
  const result = [];
  const indeg = new Array(n).fill(0); // 记录点的入度
  const graph = new Array(n).fill(0).map(() => []);
  const queue = [];

  for (let [a, b] of edges) {
    // 题目是 1 ~ k，转化为 0 ~ k，后面返回结果的时候再加回来
    a -= 1;
    b -= 1;
    graph[a].push(b);
    indeg[b]++;
  }

  // 初始入度为 0 的点入队列
  for (let i = 0; i < n; i++) {
    if (indeg[i] === 0) {
      queue.push(i);
      result.push(i);
    }
  }

  while (queue.length) {
    const a = queue.shift();
    for (const b of graph[a]) {
      if (--indeg[b] === 0) {
        queue.push(b);
        result.push(b);
      }
    }
  }

  return result;
}


console.log(buildMatrix(k = 3, [[1, 2], [3, 2]], [[2, 1], [3, 2]])); // [[3,0,0],[0,0,1],[0,2,0]]
console.log(buildMatrix(k = 3, [[1, 2], [2, 3], [3, 1], [2, 3]], [[2, 1]])); // []