/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const len = nums.length;
  const dp = new Array(len).fill(Infinity);

  dp[0] = 0;
  for (let i = 0; i < len; i++) {
    const value = nums[i];
    for (let j = i; j < value + i + 1 && j < len; j++) {
      dp[j] = Math.min(dp[j], dp[i] + 1);
    }
  }

  // console.log('dp = ', dp);
  return dp[len - 1];
};



console.log(jump([2, 3, 1, 1, 4])); // 2
console.log(jump([2, 3, 0, 1, 4])); // 2
