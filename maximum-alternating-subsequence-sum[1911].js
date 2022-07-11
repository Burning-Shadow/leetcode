/**
 * @param {number[]} nums
 * @return {number}
 * 
 * https://leetcode.cn/problems/maximum-alternating-subsequence-sum/solution/zui-duan-tan-xin-fa-by-zw-l-5lc1/
 * 这个做的很棒，抽象成股票的买入卖出问题
 */
// var maxAlternatingSum = function (nums) {
//   nums.unshift(0);
//   const len = nums.length;
//   let result = 0;
//   for (let i = 1; i < len; i++) result += Math.max(0, nums[i] - nums[i - 1]);
//   return result;
// };

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * dp[i][0] 代表第 i 天买入的收益
 * dp[i][1] 代表第 i 天卖出的收益
 */
var maxAlternatingSum = function (nums) {
  nums.unshift(0);
  const len = nums.length;
  const dp = new Array(len).fill(0).map(_ => new Array(2).fill(0));
  dp[1][0] = -nums[1];
  dp[1][1] = nums[1];

  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - nums[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + nums[i]);
  }

  return Math.max(dp[len - 1][0], dp[len - 1][1]);
};

console.log(maxAlternatingSum([4, 2, 5, 3])); // 7
console.log(maxAlternatingSum([5, 6, 7, 8])); // 8
console.log(maxAlternatingSum([6, 2, 1, 2, 4, 5])); // 10