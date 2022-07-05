/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 若某个作为起跳点的格子可跳跃距离为 x，那么之后的 x 个格子均可作为起跳点
 */
var canJump = function (nums) {
  const len = nums.length;
  if (len === 1) return true;
  if (nums[0] === 0) return false;
  const dp = new Array(len).fill(0);
  dp[0] = nums[0];

  for (let i = 0; i < len; i++) {
    if (dp[i] === 0) continue;
    for (let j = 1; j < nums[i] && i + j <= len; j++) {
      dp[i + j] += 1;
    }
  }

  return dp[len - 1] > 0;


  // let k = 0;
  // for (let i = 0; i < len; i++) {
  //   if (i > k) return false;
  //   k = Math.max(k, i + nums[i]);
  // }
  // return true;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([0])); // true
console.log(canJump([2,0,0])); // true
