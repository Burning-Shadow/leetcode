/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
  let result = 0, last2 = -1, last1 = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= left && nums[i] <= right) {
      last1 = i;
    } else if (nums[i] > right) {
      last2 = i;
      last1 = -1;
    }
    if (last1 !== -1) {
      result += last1 - last2;
    }
  }
  return result;
};



/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
  const count = (nums, lower) => {
    let result = 0, cur = 0;
    for (const x of nums) {
      cur = x <= lower ? cur + 1 : 0;
      result += cur;
    }
    return result;
  };

  return count(nums, right) - count(nums, left - 1);
}





console.log(numSubarrayBoundedMax([2, 1, 4, 3], 2, 3)); // 3
console.log(numSubarrayBoundedMax([2, 9, 2, 5, 6], 2, 8)); // 7
