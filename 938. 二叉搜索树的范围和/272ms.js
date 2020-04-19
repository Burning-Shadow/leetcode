/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
  /**
   *
   * 由于二叉搜索树的特性（根节点必比左枝大比右枝小）故开始想着将数组中内容排序即可
   * 但实际上输入的root为一棵完整的树结构，故进行如下判断：
   * 若当前节点大于R小于L则加入sum，否则根据大小进行左递归或右递归
   *
   *  */
  let sum = L + R,
    i = 0,
    arr = [];

  function preOrderTraverse(node) {
    if (node.val) {
      arr.push(node.val);
    }
    node.left && preOrderTraverse(node.left);
    node.right && preOrderTraverse(node.right);
  }

  preOrderTraverse(root);

  arr.sort((a, b) => {
    return a - b;
  });

  while (i < arr.length) {
    if (arr[i] > L && arr[i] < R && arr[i]) {
      sum += arr[i];
    }
    i++;
  }
  return sum;
};
