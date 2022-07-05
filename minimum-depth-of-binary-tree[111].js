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
var minDepth = function(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  const dfs = (node, depth) => {
    if (!node.left && !node.right) return depth;
    let leftDepth = Infinity, rightDepth = Infinity;
    if (node.left) leftDepth = Math.min(leftDepth, dfs(node.left, depth + 1));
    if (node.right) rightDepth = Math.min(rightDepth, dfs(node.right, depth + 1));
    return Math.min(leftDepth, rightDepth);
  };

  return dfs(root, 1);
};