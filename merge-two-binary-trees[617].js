/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  if (!t1 || !t2) return t1 || t2;
  function dfs(root1, root2) {
    if (!root1 || !root2) return;
    root1.val = root1.val + (root2 ? root2.val : 0);

    if (!root1.left && root2.left) root1.left = new TreeNode(0);
    if (!root1.right && root2.right) root1.right = new TreeNode(0);

    dfs(root1.left, root2.left);
    dfs(root1.right, root2.right);
  }
  dfs(t1, t2);
  return t1;
};
