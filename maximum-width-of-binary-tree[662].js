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
 * @return {number}
 * 
 * bfs
 * https://leetcode.cn/problems/maximum-width-of-binary-tree/solution/jsji-shu-yi-chu-yi-chu-yi-chu-lai-yi-bu-75xqn/
 * 统计时需将层数考虑进去
 */
var widthOfBinaryTree = function (root) {
  const queue = [[root, 0]];
  let maxWidth = 0; // 全局维护最大值
  let left = 0; // 记录当前层最左边节点的计数值
  let right = 0; // 记录当前层最右边节点的计数值
  while (queue.length) {
    left = queue[0][1];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      let [node, pos] = queue.shift();
      right = pos;
      if (node.left) queue.push([node.left, 2 * (pos - left)]); // 重点，优化掉左边不需要计数的部分
      if (node.right) queue.push([node.right, 2 * (pos - left) + 1]);
    }
    maxWidth = Math.max(maxWidth, right - left + 1);
  }
  return maxWidth;
};

/**
 * @param {TreeNode} root
 * @return {number}
 * 
 * dfs
 * https://leetcode.cn/problems/maximum-width-of-binary-tree/solution/by-quwny-ebds/
 */
var widthOfBinaryTree = function (root) {
  /** JS 存在计数溢出的问题，使用 BigInt，BigInt 不能调用 Math 中的方法。 */
  let maxWidth = 1n;
  const leftIds = [];
  const dfs = (root, level, currIdx) => {
    if (leftIds[level] === undefined) {
      leftIds[level] = currIdx;
    } else {
      const width = currIdx - leftIds[level] + 1n;
      maxWidth = maxWidth > width ? maxWidth : width;
    }
    if (root.left !== null) {
      dfs(root.left, level + 1, currIdx * 2n - 1n);
    }
    if (root.right !== null) {
      dfs(root.right, level + 1, currIdx * 2n);
    }
  }
  dfs(root, 0, 1n);
  return maxWidth;
};


