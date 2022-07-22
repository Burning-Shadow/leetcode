/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 * 
 * dp[i] 表示 每个节点的状态，i 表示染了几个节点，i=0 表示没有染色，i>0 表示染色 
 * 
 * 1. root不染色，那么只要返回 dp[0]，其值为左、右子树染色或不染色的最大值之和
 * 2. root染色，那么就分左子树染色 j 个，右子树染色 i - 1 - j 个时，加上 root.val 的和。
 *   注意：j 需要从 0 取到 i - 1，也就是包含 l[0] 和 r[0]。因为 l[0] 也包含左子树染了j个节点的情况，因为左子树的下一层子节点可能染了j个节点。
 * 
 * dp[i] = Math.max(dp[i], root.val + l[j] + r[i - 1 - j]);
 */
var maxValue = function (root, k) {
  let r_dp = dynamic(root, k);
  return Math.max(...r_dp);
};

function dynamic(root, k) {
  const dp = new Array(k + 1).fill(0);
  if (!root) return dp;

  let l_dp = dynamic(root.left, k);
  let r_dp = dynamic(root.right, k);
  console.log(`l_dp = ${l_dp}`);
  console.log(`r_dp = ${r_dp}`);
  // 不涂色
  let l_max = -Infinity, r_max = -Infinity;
  for (let i = 0; i <= k; i++) {
    // 左右子树最大值
    l_max = Math.max(l_max, l_dp[i]);
    r_max = Math.max(r_max, r_dp[i]);
  }
  dp[0] = l_max + r_max;
  // 涂色
  for (let i = 1; i <= k; i++) {
    for (let j = 0; j < i; j++) {
      // 左右子树分配 涂 k - 1 个
      dp[i] = Math.max(dp[i], l_dp[j] + r_dp[i - 1 - j] + root.val)
    }
  }
  return dp;
}