/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 排序 + 双指针
 */
var findPairs = function (nums, k) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let y = 0,
    cnt = 0;
  for (let x = 0; x < len; x++) {
    if (x === 0 || nums[x] !== nums[x - 1]) {
      while (y < len && (nums[y] < nums[x] + k || y <= x)) y++;
      if (y < len && nums[y] === nums[x] + k) cnt++;
    }
  }
  return cnt;
};

console.log(findPairs([3, 1, 4, 1, 5], 2)); // 2
console.log(findPairs([1, 2, 3, 4, 5], 1)); // 4
console.log(findPairs([1, 3, 1, 5, 4], 0)); // 1