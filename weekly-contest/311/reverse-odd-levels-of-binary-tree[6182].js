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
 * @return {TreeNode}
 */
var reverseOddLevels = function (root) {
  const queue = [root];
  let isOdd = false;

  while (queue.length) {
    const len = queue.length;

    if (isOdd) {
      const reverse = [...queue].map(_ => _.val).reverse();
      for (let i = 0; i < len; i++) {
        const reverseValue = reverse[i];
        const currNode = queue.shift();
        if (currNode.left) queue.push(currNode.left);
        if (currNode.right) queue.push(currNode.right);

        currNode.val = reverseValue;
      }
    } else {
      for (let i = 0; i < len; i++) {
        const node = queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }

    isOdd = !isOdd;
  }

  return root;
};