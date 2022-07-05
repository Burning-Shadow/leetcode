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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const inorderTree = [];
  let inorder = -Infinity,
    result = true;

  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    result = result && inorder < node.val;
    inorder = node.val;
    inorderTree.push(node.val);
    dfs(node.right);
  };

  dfs(root);

  return result;
};