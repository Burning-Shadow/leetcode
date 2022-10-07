/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let result = 0;
  let i = 0;

  while (i < nums.length) {
    let cursum = nums[i++];
    while (i < nums.length && nums[i] > nums[i - 1]) {
      cursum += nums[i++];
    }
    result = Math.max(result, cursum);
  }

  return result;
};

console.log(maxAscendingSum([10, 20, 30, 5, 10, 50])); // 65
console.log(maxAscendingSum([10, 20, 30, 40, 50])); // 150
console.log(maxAscendingSum([12, 17, 15, 13, 10, 11, 12])); // 33
console.log(maxAscendingSum([100, 10, 1])); // 100