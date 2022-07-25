/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 最大的环形子数组和 = max(最大子数组和，数组总和-最小子数组和)
 * 看这个图就可以 https://leetcode.cn/problems/maximum-sum-circular-subarray/solution/wo-hua-yi-bian-jiu-kan-dong-de-ti-jie-ni-892u/
 */
var maxSubarraySumCircular = function (nums) {
  let total = 0, maxSum = [nums[0]], currMax = 0, minSum = [nums[0]], currMin = 0;
  for (const num of nums) {
    currMax = max(currMax + a, a);
    maxSum = max(maxSum, currMax);
    currMin = min(currMin + a, a);
    minSum = min(minSum, currMin);
    total += num;
  }
  return maxSum > 0 ? max(maxSum, total - minSum) : maxSum;
};

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * dp
 */
var maxSubarraySumCircular = function (nums) {
  const len = nums.length;
  const dp = new Array(len).fill(0);
  dp[0] = nums[0];
  let max = dp[0], sum = dp[0];

  for (let i = 1; i < len; i++) {
    sum += nums[i];
    dp[i] = nums[i] + Math.max(dp[i - 1], 0);
    max = Math.max(dp[i], max);
  }

  let min = 0;
  for (let i = 1; i < len; i++) {
    dp[i] = nums[i] + Math.min(dp[i - 1], 0);
    min = Math.min(dp[i], 0);
  }

  return Math.max(max, sum - min);
};

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 前缀和 + 单调队列
 */
var maxSubarraySumCircular = function (nums) {
  const len = nums.length;
  const arr = new Array(2 * len).fill(0);
  for (let i = 0; i < 2 * len; i++) arr[i + 1] = arr[i] + nums[i % len];

  const deque = [0];
  let result = nums[0];
  for (let i = 1; i <= 2 * len; i++) {
    if (deque[0] < i - len) deque.shift();
    result = Math.max(result, arr[i] - arr[deque[0]]);
    // Remove any i1's with arr[i2] <= arr[i1].
    while (deque.length && arr[i] <= arr[deque[deque.length - 1]]) deque.pop();

    deque.push(i);
  }

  return result;
};

console.log(maxSubarraySumCircular([1, -2, 3, -2])); // 3
console.log(maxSubarraySumCircular([5, -3, 5])); // 10
console.log(maxSubarraySumCircular([3, -2, 2, -3])); // 3