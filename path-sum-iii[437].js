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
 * @return {number}
 * 
 * dfs
 */
var pathSum = function (root, targetSum) {
  if (!root) return 0;

  const dfs = (node, targetSum) => {
    let ret = 0;

    if (!node) return 0;
    const { val } = node;
    if (val === targetSum) ret++;

    ret += dfs(node.left, targetSum - val);
    ret += dfs(node.right, targetSum - val);
    return ret;
  }

  let ret = dfs(root, targetSum);
  ret += pathSum(root.left, targetSum);
  ret += pathSum(root.right, targetSum);
  return ret;
};


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
 * @return {number}
 * 
 * 前缀和
 */
var pathSum = function (root, targetSum) {
  const prefix = new Map();
  prefix.set(0, 1);

  const dfs = (root, prefix, curr, targetSum) => {
    if (root == null) {
      return 0;
    }

    let ret = 0;
    curr += root.val;

    ret = prefix.get(curr - targetSum) || 0;
    prefix.set(curr, (prefix.get(curr) || 0) + 1);
    ret += dfs(root.left, prefix, curr, targetSum);
    ret += dfs(root.right, prefix, curr, targetSum);
    prefix.set(curr, (prefix.get(curr) || 0) - 1);

    return ret;
  }

  return dfs(root, prefix, 0, targetSum);
}
