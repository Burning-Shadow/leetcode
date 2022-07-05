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
 * @return {number[][]}
 */
 var levelOrder = function (root) {
  const result = [];
  const bfs = (root, depth) => {
    if (!root) return;
    if (depth === result.length) result.push([]);
    result[depth].push(root.val);
    bfs(root.left, depth + 1);
    bfs(root.right, depth + 1);
  }

  bfs(root, 0);

  return result;
};