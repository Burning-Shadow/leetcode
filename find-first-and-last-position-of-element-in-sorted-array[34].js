/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * 两轮复杂度为 O(logn) 的二分查找
 */
var searchRange = function (nums, target) {
  const result = [-1, -1];
  const len = nums.length;
  if (len === 0) return result;
  let left = 0,
    right = len - 1;

  while (left < right) {
    let mid = ((left + right) >> 1) | 0;
    if (target <= nums[mid]) right = mid;
    else left = mid + 1
  }

  if (nums[left] !== target) return result;
  result[0] = left;

  right = len - 1;
  while (left < right) {
    let mid = (left + right) >> 1 | 0;
    if (target >= nums[mid]) left = mid + 1
    else right = mid;
  }
  if (nums[right] === target) result[1] = right
  else result[1] = right - 1
  return result;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1,-1]
console.log(searchRange(nums = [], 0)); // [-1,-1]