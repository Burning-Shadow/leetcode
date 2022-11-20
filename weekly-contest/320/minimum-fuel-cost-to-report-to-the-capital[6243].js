/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 * 
 * 贪心 + dfs
 * 字节点尽量蹭上父节点的车
 */
var minimumFuelCost = function (roads, seats) {
  // 节点关系缓存到Map中，方便快速取数
  const map = new Map();
  for (let i = 0; i < roads.length; i++) {
    const [a, b] = roads[i];
    if (!map.has(a)) {
      map.set(a, []);
    }
    if (!map.has(b)) {
      map.set(b, [])
    }
    map.get(a).push(b);
    map.get(b).push(a);
  }

  let result = 0;
  /**
   * v 当前节点
   * parent 父节点，防止重复遍历
   * 当做n叉树进行深度遍历，返回以该节点为根的个数
   */
  function dfs(v, parent) {
    const children = map.get(v);
    // 示例3的情况，无子节点直接返回
    if (!children) return 1;

    let total = 1;
    for (let i = 0; i < children.length; i++) {
      if (children[i] === parent) {
        continue;
      }
      // 累加子节点为根的节点个数
      total += dfs(children[i], v);
    }

    // 当前节点0，不需要计算前往父节点的消耗油量
    if (v !== 0) {
      // 计算当前人数，需要多少辆车可以到达父节点，也就是消耗油量
      result += Math.ceil(total / seats)
    }

    // 返回节点数
    return total
  }

  dfs(0, -1);

  return result;
};





console.log(minimumFuelCost([[0, 1], [0, 2], [0, 3]], 5)); // 3
console.log(minimumFuelCost([[3, 1], [3, 2], [1, 0], [0, 4], [0, 5], [4, 6]], 2)); // 7
console.log(minimumFuelCost([], 1)); // 0