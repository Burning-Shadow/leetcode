/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let ans = 0;
  nums.sort((a, b) => a - b);
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    if (nums[i] > 0) {
      subtract(nums, nums[i], i);
      ans++;
    }
  }
  return ans;
}

const subtract = (nums, x, startIndex) => {
  const length = nums.length;
  for (let i = startIndex; i < length; i++) {
    nums[i] -= x;
  }
};




console.log(minimumOperations([1, 5, 0, 3, 5])); // 3
console.log(minimumOperations([0])); // 0
