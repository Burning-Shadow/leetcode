/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let cnt = 0, idx = 0, sum = 0;

  while (idx < len) {
    if (nums[idx] && nums[idx] > sum) {
      sum = nums[idx];
      cnt += 1;
    }
    idx += 1;
  }
  return cnt;
};

console.log(minimumOperations([1, 5, 0, 3, 5])); // 3
console.log(minimumOperations([0])); // 0
console.log(minimumOperations([1, 2, 3, 5])); // 4