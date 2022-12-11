/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let pre = nums[0] - 1, result = 0;
  for (const num of nums) {
    pre = Math.max(pre + 1, num);
    result += pre - num;
  }
  return result;
};





console.log(minOperations([1, 1, 1])); // 3
console.log(minOperations([1, 5, 2, 4, 1])); // 14
console.log(minOperations([8])); // 0