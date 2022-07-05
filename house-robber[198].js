/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length;
  if (!len) return 0;
  if (len === 1) return nums[0];
  const dp = new Array(len).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < len; i++) dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);

  return dp[len - 1];
};

console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12
