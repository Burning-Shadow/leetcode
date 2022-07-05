/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode { // 定义节点
  constructor(val) {
    this.val = val ? val : 0;
    this.left = null
    this.right = null
  }
}

const createTree = (arr) => { // 创建二叉树
  let tree = new TreeNode(arr[0])
  let Nodes = [tree]
  let i = 1

  for (let node of Nodes) {
    Nodes.push(node.left = arr[i] ? new TreeNode(arr[i]) : null);
    i += 1;
    if (i == arr.length) return tree;
    Nodes.push(node.right = arr[i] ? new TreeNode(arr[i]) : null);
    i += 1;
    if (i == arr.length) return tree;
  }
}

// 单个节点路径：左 + 右、左 + 上、右 + 上。

/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxPathSum = function(root) {
  let sum = -Infinity;

  /**
   * 如果左子节点没有左右子节点，那么左子节点就是 左叶子节点
   * @param {TreeNode} node
   * @param {string} nodeType [left, right]
  */
  const dfs = (node) => {
    if (!node) return 0;

    const left = Math.max(0, dfs(node.left));
    const right = Math.max(0, dfs(node.right));

    sum = Math.max(sum, left + right + node.val);
    return Math.max(left, right) + node.val;
  };

  dfs(root);

  return sum;
};

// console.log(maxPathSum(createTree([1, 2, 3]))); // 6
// console.log(maxPathSum(createTree([-10, 9, 20, null, null, 15, 7]))); // 42
// console.log(maxPathSum(createTree([0]))); // 0
// console.log(maxPathSum(createTree([1, 2]))); // 3
// console.log(maxPathSum(createTree([2, -1]))); // 2
// console.log(maxPathSum(createTree([-2, 1]))); // 1
// console.log(maxPathSum(createTree([2, -1, -2]))); // 2
// console.log(maxPathSum(createTree([-2, -1]))); // -1
console.log(maxPathSum(createTree([1, 2, null, 3, null, 4, null, 5]))); // 15

// console.log(Math.max([ -1000, -1, 0, 1, 2, -1, -2 ]));