/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  let result = false;

  if (A && B) {
    if (A.val === B.val) result = treeAHasTreeB(A, B);
    if (!result) result = isSubStructure(A.left, B);
    if (!result) result = isSubStructure(A.right, B);
  }

  return result;
};

const treeAHasTreeB = (A, B) => {
  if (!B) return true;
  // R遍历完了，但是B还没有遍历完，那么B肯定不是R的子结构
  if (!A) return false;
  if (A.val !== B.val) return false;

  return treeAHasTreeB(A.left, B.left) && treeAHasTreeB(A.right, B.right);
}
