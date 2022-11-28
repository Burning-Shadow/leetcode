/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * dp
 */
var largestSumOfAverages = function (nums, k) {
  const len = nums.length;
  const prefix = new Array(len + 1).fill(0);
  for (let i = 0; i < len; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }
  const dp = new Array(len + 1).fill(0).map(() => new Array(k + 1).fill(0));
  for (let i = 1; i <= len; i++) {
    dp[i][1] = prefix[i] / i;
  }
  for (let j = 2; j <= k; j++) {
    for (let i = j; i <= len; i++) {
      for (let x = j - 1; x < i; x++) {
        dp[i][j] = Math.max(dp[i][j], dp[x][j - 1] + (prefix[i] - prefix[x]) / (i - x));
      }
    }
  }
  return dp[len][k];
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 一维 dp
 */
var largestSumOfAverages = function (nums, k) {
  const len = nums.length;
  const prefix = new Array(len + 1).fill(0);
  for (let i = 0; i < len; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }
  const dp = new Array(len + 1).fill(0);
  for (let i = 1; i <= len; i++) {
    dp[i] = prefix[i] / i;
  }
  for (let j = 2; j <= k; j++) {
    for (let i = len; i >= j; i--) {
      for (let x = j - 1; x < i; x++) {
        dp[i] = Math.max(dp[i], dp[x] + (prefix[i] - prefix[x]) / (i - x));
      }
    }
  }
  return dp[len];
};




console.log(largestSumOfAverages());
