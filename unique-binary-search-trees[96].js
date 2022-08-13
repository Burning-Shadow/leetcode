/**
 * @param {number} n
 * @return {number}
 * 
 * 为了构建出一棵二叉搜索树，我们可以遍历每个数字 i，将该数字作为树根，递归构建左右子树
 * 故可以将其拆分为两个子问题：
 *   1. G(n): 长度为 n 的序列能构成的不同二叉搜索树的个数。
 *   2. F(i,n): 以 i 为根、序列长度为 n 的不同二叉搜索树个数 (1 ≤ i ≤ n)。
 * 
 * 而 Gn 由 ∑(1 ~ n)F(i,n)得到
 */
var numTrees = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }
  return dp[n];
};

/**
 * @param {number} n
 * @return {number}
 * 
 * 卡塔兰数
 * Cn+1 = 2 * (2n + 1) * Cn / (n + 2)
 */
var numTrees = function (n) {
  let cnt = 1;
  for (let i = 0; i < n; ++i) {
    cnt = cnt * 2 * (2 * i + 1) / (i + 2);
  }
  return cnt;
};

console.log(numTrees(3)); // 5
console.log(numTrees(1)); // 1