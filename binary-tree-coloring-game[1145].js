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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function (root, n, x) {
  let xNode;
  const find = (node, x) => {
    if (xNode || !node) {
      return;
    }
    if (node.val === x) {
      xNode = node;
      return;
    }
    find(node.left, x);
    find(node.right, x);
  }

  const getSubtreeSize = (node) => {
    if (!node) {
      return 0;
    }
    return 1 + getSubtreeSize(node.left) + getSubtreeSize(node.right);
  };
  find(root, x);
  const leftSize = getSubtreeSize(xNode.left);
  if (leftSize >= Math.floor((n + 1) / 2)) {
    return true;
  }
  const rightSize = getSubtreeSize(xNode.right);
  if (rightSize >= Math.floor((n + 1) / 2)) {
    return true;
  }
  const remain = n - 1 - leftSize - rightSize;
  return remain >= Math.floor((n + 1) / 2);
}
