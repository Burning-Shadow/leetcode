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
 */
 var sumOfLeftLeaves = function(root) {
  let cnt = 0;

  /**
   * 如果左子节点没有左右子节点，那么左子节点就是 左叶子节点
   * @param {TreeNode} node
   * @param {string} nodeType [left, right]
  */
  const dfs = (node, nodeType) => {
    if (!node.left && !node.right && nodeType === 'left') cnt += node.val;
    if (node.left) dfs (node.left, 'left');
    if (node.right) dfs (node.right, 'right');
  };

  dfs(root);

  return cnt;
};