/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function (nums) {
  const len = nums.length;
  if (len <= 2) return len;
  let slow = 2, fast = 2;
  while (fast < len) {
    if (nums[slow - 2] != nums[fast]) {
      nums[slow] = nums[fast];
      slow += 1;
    }
    fast += 1;
  }
  return slow;
};
