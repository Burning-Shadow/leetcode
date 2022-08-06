/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 二分
 * https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/solution/xun-zhao-xuan-zhuan-pai-xu-shu-zu-zhong-5irwp/
 * 后续写题解可以参考这种画坐标轴的形式
 */
var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    const pivot = low + ((high - low) >> 1);
    if (nums[pivot] < nums[high]) high = pivot;
    else low = pivot + 1;
  }
  return nums[low];
};

console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
console.log(findMin([11, 13, 15, 17]));