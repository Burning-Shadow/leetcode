/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const result = [-1, -1];
  const len = nums.length;
  if (len === 0) return result;
  let l = 0,
    r = len - 1;

  while (l < r) {
    let mid = (l + r) / 2 | 0;
    if (target <= nums[mid]) r = mid;
    else l = mid + 1
  }

  if (nums[l] !== target) return result;
  result[0] = l;

  r = len - 1;
  while (l < r) {
    let mid = (l + r) / 2 | 0;
    if (target >= nums[mid]) l = mid + 1
    else r = mid;
  }
  if (nums[r] === target) result[1] = r
  else result[1] = r - 1
  return result;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1,-1]
console.log(searchRange(nums = [], 0)); // [-1,-1]