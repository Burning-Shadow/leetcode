/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function (edges) {
  // 使用拓扑排序，不是很难，下次也就可以写了，加油
  // 首先统计每个节点，所对应的入度
  let n = edges.length, indeg = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (edges[i] == -1) continue;
    indeg[edges[i]]++;
  }
  // console.log(indeg)
  // 之后通过拓扑排序将不属于环中的节点排除
  let vis = new Set(), queue = [];
  for (let i = 0; i < n; i++) {
    if (indeg[i] === 0) {
      // 需要存放到队列中
      queue.push(i);
    }
  }
  while (queue.length != 0) {
    // 进行拓扑排序
    let cur = queue.pop(), next = edges[cur];
    indeg[next]--;
    if (indeg[next] == 0) {
      queue.push(next);
    }
  }
  let flag = true;
  indeg.forEach(val => {
    if (val != 0) {
      flag = false;
    }
  })
  if (flag) return -1;
  // console.log(vis)

  function bfs(tar) {
    let q = [tar], cen = 0;
    while (true) {
      let cur = q.pop(), next = edges[cur];
      if (vis.has(next)) {
        // 找到环的头了
        // console.log(vis, cen)
        return cen;
      }
      q.push(next);
      vis.add(next);
      cen++;
    }
  }

  // 拓扑排序完成后，所有的非环的节点都被放入到vis数组中
  let max = 0, r = -1;
  for (let i = 0; i < n; i++) {
    if (vis.has(i) || indeg[i] == 0) {
      // 表示不是环中的节点
      continue;
    }
    // 环中的节点
    let ans = bfs(i);
    if (ans > max) {
      max = ans;
      r = i;
    }
  }
  return max;
};

/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function (edges) {
  const map = {};
  for (let i = 0; i < edges.length; i++) {
    map[i] = edges[i];
  }
  let ans = -1;
  // 记录所有已经被访问的节点
  const dead = new Set();
  for (let i = 0; i < edges.length; i++) {
    // 已经被访问过
    if (dead.has(i)) continue;
    const arr = [];
    // 用于判断是否有环
    const set = new Set();
    let next = i;
    while (map[next] !== -1 && !dead.has(map[next])) {
      arr.push(map[next]);
      set.add(map[next]);
      // 加到访问记录
      dead.add(map[next]);
      next = map[next];
    }
    // 如果最后一个能访问到，说明存在环
    if (set.has(map[next])) {
      // 环的长度等于总长度减起始位置
      ans = Math.max(ans, arr.length - arr.indexOf(map[next]));
    }
    // 加到访问记录
    dead.add(i);
  }
  return ans;
};

console.log(longestCycle([3, 3, 4, 2, 3])); // 3
console.log(longestCycle([2, -1, 3, 1])); // -1