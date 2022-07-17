/**
 * 作者：sobrilliantgun
 * 链接：https://leetcode.cn/problems/number-of-dice-rolls-with-target-sum/solution/yi-ti-shuang-jie-by-sobrilliantgun-edty/
 * 来源：力扣（LeetCode）
 * 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 * 
 * 分组背包
 */
var numRollsToTarget = function (n, k, target) {
  const min = n, max = n * k, mod = 1e9 + 7;
  if (target > max || target < min) return 0;
  if (target === max || target === min) return 1;

  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = target; j >= 0; j--) {
      dp[j] = 0;
      for (let l = 1; l <= k; l++) {
        if (j >= l) {
          dp[j] = (dp[j] + dp[j - l]) % mod;
        }
      }
    }
  }
  return dp[target]
};

/**
 * @param {number} n
 * @param {number} f
 * @param {number} target
 * @return {number}
 * 
 * dp[i][j] 代表扔 i 个骰子和为 j
 * dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j - 2] + dp[i - 1][j - 3] ... + dp[i - 1][j - f]
 */
var numRollsToTarget = function (n, f, target) {
  const MOD = 1e9 + 7;
  const dp = new Array(31).fill(0).map(_ => new Array(1001).fill(0));
  const min = Math.min(f, target);
  for (let i = 1; i <= min; i++) dp[1][i] = 1;

  const targetMax = n * f;
  for (let i = 2; i <= n; i++) {
    for (let j = i; j <= targetMax; j++) {
      for (let k = 1; j - k >= 0 && k <= f; k++) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - k]) % MOD;
      }
    }
  }

  return dp[n][target];
};

/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 * 
 * 多次投掷
 */
var numRollsToTarget = function (n, k, target) {
  const min = n, max = n * k, mod = 1e9 + 7;
  if (target > max || target < min) return 0;// 超出可以投掷出的最大值或最小值
  if (target === max || target === min) return 1;

  // target (min, max) pre[i]表示有pre[i]种方式得到i
  let pre = new Array(max + 1).fill(0);
  // 第一次投掷
  for (let j = k; j >= 1; j--) {
    pre[j] = 1;
  }
  // 再进行n-1次投掷
  for (let i = 1; i < n; i++) {
    if (i + 1 > target) return pre[target]// 新的下界大于target
    const curr = new Array(max + 1).fill(0);
    for (let j = i * k; j >= i; j--) {// 遍历之前得到的结果，在之前的结果的基础上投掷
      for (let l = k; l >= 1; l--) {// 投掷出各个点数
        curr[j + l] = (curr[j + l] + pre[j]) % mod;
      }
    }
    pre = curr;
  }
  return pre[target]
};

console.log(numRollsToTarget(1, 6, 3)); // 1
console.log(numRollsToTarget(2, 6, 7)); // 6
console.log(numRollsToTarget(30, 30, 500)); // 222616187