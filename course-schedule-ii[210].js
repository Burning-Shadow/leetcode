/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 * 
 * https://leetcode.cn/problems/course-schedule-ii/solution/tuo-bu-pai-xu-jie-jue-si-lu-qing-xi-zhu-b3x0m/
 */
var findOrder = function (numCourses, prerequisites) {
  const buildGraph = (numCourses, prerequisites) => {
    const graph = new Array(numCourses).fill(0).map(() => new Array());
    for (let edge of prerequisites) {
      const [to, from] = edge;
      // 修完课程from才能修课程to  在图中添加一条从from指向to的有向边
      graph[from].push(to);
    }
    return graph;
  };

  // 记录后序遍历结果
  let result = [];
  // 记录是否存在环
  let hasCycle = false;
  const visited = new Array(numCourses).fill(false);
  const onPath = new Array(numCourses).fill(false);
  const graph = buildGraph(numCourses, prerequisites);
  // 从节点 s 开始 DFS 遍历，将遍历过的节点标记为 true

  const traverse = (graph, s) => {
    // 出现环
    if (onPath[s]) hasCycle = true;
    // 如果已经找到了环，也不用再遍历了
    if (visited[s] || hasCycle) return;
    visited[s] = true;
    onPath[s] = true;
    for (let t of graph[s]) traverse(graph, t);
    onPath[s] = false;
    // 后序遍历计算拓扑排序
    result.push(s);
  };

  // 遍历图
  for (let i = 0; i < numCourses; i++) traverse(graph, i);
  // 有环图无法进行拓扑排序
  if (hasCycle) return [];
  // 计算后序遍历的逆序，逆序遍历结果即为拓扑排序结果
  return result.reverse();
};

console.log(findOrder(2, [[1, 0]])); // [0,1]
console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])); // [0,2,1,3]
console.log(findOrder(1, [])); // [0]