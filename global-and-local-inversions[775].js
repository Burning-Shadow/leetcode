/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 维护后缀最小值
 */
var isIdealPermutation = function (nums) {
  let n = nums.length, minSuff = nums[n - 1];
  for (let i = n - 3; i >= 0; i--) {
    if (nums[i] > minSuff) {
      return false;
    }
    minSuff = Math.min(minSuff, nums[i + 1]);
  }
  return true;
};


/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 归纳证明
 */
var isIdealPermutation = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(nums[i] - i) > 1) {
      return false;
    }
  }
  return true;
};





console.log(isIdealPermutation([1, 0, 2]));
console.log(isIdealPermutation([1, 2, 0]));
