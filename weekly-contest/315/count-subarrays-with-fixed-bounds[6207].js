/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 * 
 * 可以参考下 灵茶山艾府 的题解思路
 * https://leetcode.cn/problems/count-subarrays-with-fixed-bounds/solution/jian-ji-xie-fa-pythonjavacgo-by-endlessc-gag2/
 */
function countSubarrays(nums, minK, maxK) {
  let result = 0
  let len = nums.length,
    minI = -1,
    maxI = -1,
    i0 = -1;

  for (let i = 0; i < len; ++i) {
    let x = nums[i];
    if (x == minK) minI = i;
    if (x == maxK) maxI = i;
    if (x < minK || x > maxK) i0 = i; // 子数组不能包含 nums[i0]
    result += Math.max(Math.min(minI, maxI) - i0, 0);
  }

  return result;
};



console.log(countSubarrays([1, 3, 5, 2, 7, 5], 1, 5)); // 2
console.log(countSubarrays([1, 1, 1, 1], 1, 1)); // 10
