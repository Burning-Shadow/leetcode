/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  const len = nums.length;
  let time = 0;

  for (let i = 0; i < len; i++) {
    if (time > 1) return false;
    if (nums[i - 1] > nums[i]) time += 1;
  }

  return time === 0 || (time === 1 && nums[0] >= nums[len - 1]);
};





console.log(check([3, 4, 5, 1, 2])); // true
console.log(check([2, 1, 3, 4])); // false
console.log(check([1, 2, 3])); // true
