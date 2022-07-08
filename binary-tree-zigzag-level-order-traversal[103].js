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
 var zigzagLevelOrder = function(root) {
  const result = [];
  const dfs = (node, floor) => {
    if (!node) return;
    if (!result[floor]) result[floor] = [node.val];
    else result[floor].push(node.val);
    dfs(node.left, floor + 1);
    dfs(node.right, floor + 1);
  }

  dfs(root, 0);

  result.forEach((arr, idx) => {
    if (idx & 1) arr.reverse();
  });

  return result;
};