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
 *  f(o) 表示选择 o 节点的情况下，o 节点的子树上被选择的节点的最大权值和；g(o) 表示不选择 o 节点的情况下，oo 节点的子树上被选择的节点的最大权值和；
 */
var rob = function (root) {
  const f = new Map();
  const g = new Map();

  const dfs = (node) => {
    if (node === null) {
      return;
    }
    dfs(node.left);
    dfs(node.right);
    f.set(
      node,
      node.val + (g.get(node.left) || 0) + (g.get(node.right) || 0)
    );
    g.set(
      node,
      Math.max(f.get(node.left) || 0, g.get(node.left) || 0) + Math.max(f.get(node.right) || 0, g.get(node.right) || 0)
    );
  }

  dfs(root);
  return Math.max(f.get(root) || 0, g.get(root) || 0);
};