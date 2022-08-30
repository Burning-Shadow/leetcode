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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function (root, val) {
  let parent = null;
  let curr = root;
  while (curr) {
    if (val > curr.val) {
      if (!parent) {
        return new TreeNode(val, root, null);
      }
      let node = new TreeNode(val, curr, null);
      parent.right = node;
      return root;
    } else {
      parent = curr;
      curr = curr.right;
    }
  }
  parent.right = new TreeNode(val);
  return root;
};
