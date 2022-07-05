/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  const len = nums.length;

  if (len <= 1) return 0;

  const dp = new Array(len).fill(0).map(_ => new Array(len).fill(0));
  let maxXOR = 0;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      dp[i][j] = dp[i][j] ? dp[i][j] : nums[i] ^ nums[j];
      maxXOR = Math.max(dp[i][j], maxXOR);
    }
  }

  return maxXOR;
};

console.log(findMaximumXOR([3,10,5,25,2,8])); // 28
console.log(findMaximumXOR([0])); // 0
console.log(findMaximumXOR([2,4])); // 6
console.log(findMaximumXOR([8,10,2])); // 10
console.log(findMaximumXOR([14,70,53,83,49,91,36,80,92,51,66,70])); // 127
