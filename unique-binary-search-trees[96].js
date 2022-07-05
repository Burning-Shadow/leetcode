/**
 * @param {number} n
 * @return {number}
 * 
 * 为了构建出一棵二叉搜索树，我们可以遍历每个数字 ii，将该数字作为树根，递归构建左右子树
 */
var numTrees = function (n) {
  const G = new Array(n + 1).fill(0);
  G[0] = 1;
  G[1] = 1;

  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      G[i] += G[j - 1] * G[i - j];
    }
  }
  return G[n];
};

console.log(numTrees(3)); // 5
console.log(numTrees(1)); // 1