/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 * 
 * 1. 层序遍历建图
 * 2. BFS 搜图
 */
 var amountOfTime = function (root, start) {
  const map = {};
  let queue = [root];
  // 构建无向图
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      const tmp = map[node.val] || [];
      if (node.left) {
        queue.push(node.left);
        tmp.push(node.left.val);
        const tmp2 = map[node.left.val] || [];
        tmp2.push(node.val);
        map[node.left.val] = tmp2;
      }
      if (node.right) {
        queue.push(node.right);
        tmp.push(node.right.val);
        const tmp2 = map[node.right.val] || [];
        tmp2.push(node.val);
        map[node.right.val] = tmp2;
      }
      map[node.val] = tmp;
    }
  }

  // console.log('map = ', map);

  // bfs 深度遍历统计次数
  queue = [start];
  const dead = new Set([start]);
  let cnt = -1;
  while (queue.length) {
    const len = queue.length;
    for (let k = 0; k < len; k++) {
      const node = queue.shift();
      const arr = map[node] || [];
      for (let i = 0; i < arr.length; i++) {
        if (!dead.has(arr[i])) {
          queue.push(arr[i]);
          dead.add(arr[i]);
        }
      }
    }
    cnt++;
  }
  return cnt;
};


/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 * 
 * start 节点向下的最深路径加上它的父辈节点不包含 start 节点的最深路径长度之和
 */
var amountOfTime = function (root, start) {
  let ans = 0
  function dfs(node) {
    if (!node) {
      return { match: false, depth: 0 }
    }
    const { match: lMatch, depth: lDepth } = dfs(node.left)
    const { match: rMatch, depth: rDepth } = dfs(node.right)

    if (lMatch || rMatch) {
      ans = Math.max(ans, rDepth + lDepth)
    }
    if (node.val === start) {
      ans = Math.max(ans, rDepth, lDepth)
      return {
        match: true,
        depth: 1
      }
    }
    return {
      match: lMatch || rMatch,
      depth: (lMatch ? lDepth : (rMatch ? rDepth : Math.max(lDepth, rDepth))) + 1
    }
  }
  dfs(root)
  return ans
};
