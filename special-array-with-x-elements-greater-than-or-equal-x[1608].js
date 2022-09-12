/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;

  for (let i = 0, j = len - 1; i < j; i++, j--) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  for (let i = 1; i <= len; ++i) {
    if (nums[i - 1] >= i && (i === len || nums[i] < i)) {
      return i;
    }
  }

  return -1;
};


console.log(specialArray([3, 5])); // 2
console.log(specialArray([0, 0])); // -1
console.log(specialArray([0, 4, 3, 0, 4])); // 3
console.log(specialArray([3, 6, 7, 7, 0])); // -1