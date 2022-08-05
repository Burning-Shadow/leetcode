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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const helper = (root, level) => {
    if (!root) return;
    if (!nodes[level]) nodes[level] = [root.val];
    else nodes[level].push(root.val);

    helper(root.left, level + 1);
    helper(root.right, level + 1);
  }
  let nodes = [];
  helper(root, 0);

  return nodes.map((node) => node.reduce((prev, curr) => prev + curr) / node.length);
};
