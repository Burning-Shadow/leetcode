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
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
  if (!root) return [];
  const pathList = [];
  const dfs = (node, path) => {
    if (!node) return;
    const value = path.reduce((a, b) => a + b, 0);
    if (!node.left && !node.right && value === targetSum) {
      pathList.push(path);
      return;
    }
    if (node.left) dfs(node.left, [...path, node.left.val]);
    if (node.right) dfs(node.right, [...path, node.right.val]);
  };

  dfs(root, [root.val]);

  return pathList;
};