/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 将 dp[i] 定义为，以 nums[i] 结尾的子串最大值
 */
var maxSubArray = function (nums) {
  const [firstChild] = nums;
  const len = nums.length;
  const dp = new Array(len).fill(-Infinity);
  dp[0] = firstChild;
  let result = firstChild;

  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    result = Math.max(result, dp[i]);
  }

  return result;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23