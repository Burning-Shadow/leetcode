// https://leetcode.cn/contest/weekly-contest-305

/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 *             |- dp[i - 1] && nums[i] ==== nums[i - 1]                   (i > 0)
 * dp[i + 1] = |- dp[i - 2] && nums[i] ==== nums[i - 1] ==== nums[i - 2]  (i > 1)
 *             |- dp[i - 2] && nums[i - 1] + 1 ==== nums[i - 2] + 2       (i > 1)
 */
var validPartition = function (nums) {
  const len = nums.length;
  if (len < 2) return false;
  const dp = new Array(len + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i < len; i++) {
    if (
      dp[i - 1] && nums[i] === nums[i - 1]
      || i > 1 && dp[i - 2] && (nums[i] === nums[i - 1] && nums[i] === nums[i - 2] ||
        nums[i] === nums[i - 1] + 1 && nums[i] === nums[i - 2] + 2))
      dp[i + 1] = true;
  }

  return dp[len];
};

/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 回溯
 */
var validPartition = function (nums) {
  const len = nums.length;
  const memo = new Array(len).fill(false);

  const dfs = (position) => {
    if (position === len) return true;
    if (memo[position] || position === len - 1) return false;
    if (nums[position] === nums[position + 1]) {
      if (dfs(position + 2)) return true;
      if (position + 2 < len && nums[position] === nums[position + 2] && dfs(position + 3)) return true;
    } else if (position + 2 < len && nums[position] + 1 === nums[position + 1] && nums[position] + 2 === nums[position + 2]) {
      if (dfs(position + 3)) return true;
    }
    memo[position] = true;
    return false;
  };

  return dfs(0, len);
};

console.log(validPartition([4, 4, 4, 5, 6])); // true
console.log(validPartition([1, 1, 1, 2])); // false