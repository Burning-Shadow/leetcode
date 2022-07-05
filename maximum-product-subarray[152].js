/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const len = nums.length;
  const dpMax = new Array(len).fill(0);
  const dpMin = new Array(len).fill(0);
  dpMax[0] = nums[0];
  dpMin[0] = nums[0];

  for (let i = 1; i < len; i++) {
    dpMax[i] = Math.max(dpMax[i - 1] * nums[i], nums[i], dpMin[i - 1] * nums[i]);
    dpMin[i] = Math.min(dpMin[i - 1] * nums[i], nums[i], dpMax[i - 1] * nums[i]);
  }

  console.log('dpMax = ', dpMax);
  console.log('dpMin = ', dpMin);

  return Math.max(...dpMax, ...dpMin);
};

console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([-2, 0, -1])); // 0
console.log(maxProduct([-2, 4, -3])); // 0