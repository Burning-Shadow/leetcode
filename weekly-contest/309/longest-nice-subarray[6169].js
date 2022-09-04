/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 滑窗 + 位运算
 */
var longestNiceSubarray = function (nums) {
  let maxLen = 1;
  let left = 0;

  while (left < nums.length) {
    let cur = nums[left];
    let right = left + 1;
    while (right < nums.length && (cur & nums[right]) === 0) {
      // 子数组中不同位置按位 & 都是 0，可以利用或运算存储结果
      cur |= nums[right];
      right++;
    }
    maxLen = Math.max(maxLen, right - left);
    left++;
  }

  return maxLen;
};

console.log(longestNiceSubarray([1, 3, 8, 48, 10])); // 3
console.log(longestNiceSubarray([3, 1, 5, 11, 13])); // 1