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
 * 有问题，样例 [1, 0] 无法通过
 */
// var sumNumbers = function (root) {
//   const number = [];
//   const dfs = (node, str) => {
//     if (!node) {
//       // 空节点会 push 两次，故结果需 / 2
//       number.push(Number(str));
//       return;
//     }
//     const newStr = `${str}${node.val}`;
//     dfs(node.left, newStr);
//     dfs(node.right, newStr);
//   };

//   dfs(root, '');
//   return number.reduce((a, b) => a + b, 0) / 2;
// };

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  const dfs = (root, prevSum) => {
    if (root === null) return 0;
    const sum = prevSum * 10 + root.val;
    if (root.left == null && root.right == null) return sum;
    else return dfs(root.left, sum) + dfs(root.right, sum);
  }

  return dfs(root, 0);
};



console.log(sumNumbers([1, 2, 3])); // 25
console.log(sumNumbers([4, 9, 0, 5, 1])); // 1026
