/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 
 * 状态压缩 + 记忆搜索
 */
var canPartitionKSubsets = function (nums, k) {
  const dfs = (s, p) => {
    if (s === 0) return true;
    if (!dp[s]) return dp[s];
    dp[s] = false;
    for (let i = 0; i < n; i++) {
      if (nums[i] + p > per) break;
      if (((s >> i) & 1) != 0) {
        if (dfs(s ^ (1 << i), (p + nums[i]) % per)) {
          return true;
        }
      }
    }
    return false;
  };
  const all = _.sum(nums);
  if (all % k !== 0) return false;
  per = all / k;
  nums.sort((a, b) => a - b);
  n = nums.length;
  if (nums[n - 1] > per) return false;
  dp = new Array(1 << n).fill(true);
  return dfs((1 << n) - 1, 0);
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 
 * 状态压缩 + 动归
 */
var canPartitionKSubsets = function (nums, k) {
  const all = _.sum(nums);
  if (all % k !== 0) return false;
  let per = all / k;
  nums.sort((a, b) => a - b);
  const n = nums.length;
  if (nums[n - 1] > per) return false;
  const dp = new Array(1 << n).fill(false);
  const curSum = new Array(1 << n).fill(0);
  dp[0] = true;
  for (let i = 0; i < 1 << n; i++) {
    if (!dp[i]) continue;
    for (let j = 0; j < n; j++) {
      if (curSum[i] + nums[j] > per) break;
      if (((i >> j) & 1) == 0) {
        let next = i | (1 << j);
        if (!dp[next]) {
          curSum[next] = (curSum[i] + nums[j]) % per;
          dp[next] = true;
        }
      }
    }
  }
  return dp[(1 << n) - 1];
}

console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4)); // true
console.log(canPartitionKSubsets([1, 2, 3, 4], 3)); // false