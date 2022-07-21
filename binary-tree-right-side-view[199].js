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
 var rightSideView = function (root) {
  if (!root) return [];
  const queue = [root];
  const list = [];

  while (queue.length) {
    const len = queue.length;
    const floor = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (i === len - 1) list.push(node.val);
      if (node.left) floor.push(node.left);
      if (node.right) floor.push(node.right);
    }
    queue.push(...floor);
  }

  return list;
};