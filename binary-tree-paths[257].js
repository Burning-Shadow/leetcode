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
 * @return {string[]}
 */
 var binaryTreePaths = function (root) {
  const result = [];
  const dfs = (node, path) => {
    if (!node) return;
    const value = node.val;
    const newValue = `${path}->${value}`;
    if (!node.left && !node.right) {
      result.push(newValue);
      return;
    }
    if (node.left) dfs(node.left, newValue);
    if (node.right) dfs(node.right, newValue);
  };
  dfs(root, '');
  return result.map(_ => _.substring(2));
};
