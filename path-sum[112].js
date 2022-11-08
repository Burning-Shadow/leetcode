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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let result = false;
  const dfs = (node, sum) => {
    if (!node) return;
    if (!node.left && !node.right && targetSum === sum + node.val) {
      result = true;
      return;
    }
    dfs(node.left, sum + node.val);
    dfs(node.right, sum + node.val);
  }

  dfs(root, 0);
  return result;
};