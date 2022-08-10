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
 * https://leetcode.cn/problems/diameter-of-binary-tree/solution/hot-100-9er-cha-shu-de-zhi-jing-python3-di-gui-ye-/
 */
var diameterOfBinaryTree = function (root) {
  if (!root) return 0;

  let result = 1;
  const dfs = (node) => {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    result = Math.max(result, left + right + 1); // 计算d_node即 left + right + 1 并更新 result
    return Math.max(left, right) + 1; // 返回该节点为根的子树的深度
  }
  dfs(root);

  return result - 1;
};