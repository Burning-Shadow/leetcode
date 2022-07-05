// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const list = [];

  const dfs = (root) => {
    if (root != null) {
      list.push(root);
      dfs(root.left);
      dfs(root.right);
    }
  }

  dfs(root);

  const size = list.length;
  for (let i = 1; i < size; i++) {
    const prev = list[i - 1],
      curr = list[i];
    prev.left = null;
    prev.right = curr;
  }
};

