/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  const len = nums.length;
  let left = 0, result = len + 1, sum = 0;
  for (let right = 0; right < len; right++) {
    const x = nums[right];
    sum += x;
    while (sum - nums[left] >= target) {
      sum -= nums[left];
      left += 1;
    }
    if (sum >= target) result = Math.min(result, right - left + 1);
  }

  return result <= len ? result : 0;
};



console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
console.log(minSubArrayLen(4, [1, 4, 4])); // 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0
